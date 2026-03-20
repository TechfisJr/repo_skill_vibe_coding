# Agent Constraints

All agent actions must be logged in the `agent-logs` folder.

## Backend Standards (myjoytravel_be)

### Routes and Services - CRUD Comments Required
Every route and service file must include comment stubs for the full CRUD surface, even if not implemented yet.

Required comments (replace `cooperative` with your entity name):
```ts
// Create <entity>
// Get all <entities>
// Get <entity> by id
// Update <entity> by id
// Delete <entity> by id
// Search <entities>
```

Apply the same pattern to every entity.

### Modules - Controllers, Services, Repositories
- Each entity lives in `src/modules/<entity>/`.
- `*.routes.ts` must import controller functions from `*.controller.ts`.
- Controllers handle `req`, `res`, and `next` only.
- Services contain business logic and must not own HTTP concerns.
- Repositories encapsulate Prisma queries and database access.
  - Services must never import or use `prismaClient` directly.
  - Services must call repository functions only.
  - Repositories expose model-scoped objects named `<model>Repository`.
  - Repositories may expose `transaction`, `queryRaw`, and `executeRaw` when required.
  - Repository method signatures should forward Prisma method signatures:
```ts
export const blogRepository = {
  findMany: (...args: Parameters<typeof prismaClient.blog.findMany>) => prismaClient.blog.findMany(...args),
};
```

### Module Contracts and Interfaces
- Every module must include `<entity>.types.ts` defining a `<Entity>Service` type.
- `<Entity>Service` must use `ServiceHandler` from `src/types/service.ts`.
- Controllers must bind and use the typed service:
```ts
import * as Service from './<entity>.service';
import type { <Entity>Service } from './<entity>.types';

const service: <Entity>Service = Service;
```
- The module types file is the contract for that module and must match exported service functions.

### Shared Types (Single Source of Truth)
- Shared types live in `src/types/` only.
- Use:
  - `ServiceContext`, `ServiceResponse`, `ServiceHandler` in all services.
  - `AuthenticatedUser` for `context.user`.
  - `PaginationParams` and `PaginationMeta` for list responses.
- No module should duplicate these shared types locally.

### Module Boundary Enforcement (Lint)
- ESLint must enforce module boundaries using `eslint-plugin-boundaries`.
- Modules may import only:
  - their own module files
  - shared layers: `src/types`, `src/utils`, `src/config`, `src/constants`, `src/schemas`, `src/middlewares`, `src/exception`, `src/prisma-client`
- Shared layers must never import from `src/modules`.
- Use `npm run lint` to validate boundaries before merging.

### Routes - Import Grouping and Namespace Imports
- Group imports into external and internal groups with a single blank line between groups.
- Keep import order sorted by module path within each group.
- Schema and controller imports must use namespace style:
```ts
import * as <Entity>Schema from '../../schemas/<entities>';
import * as <Entity>Controller from './<entity>.controller';
```
- Use the namespace when referencing schemas and services:
```ts
validateRequest(<Entity>Schema.Create<Entity>Schema)
<Entity>Controller.create<Entity>Service
```
- Route comment stubs must follow the single-line comment rule (one blank line before, no blank line after).

### Services - Objective and Version Blocks
Every service function must include a clear objective and change log block (replace names as needed):
```ts
/**
 * Function Objective - create<Entity>Service
 * Summary: Create new <entity> service.
 * Inputs: path param (N), body param (Y), Authorization (Y).
 * Preconditions: SUPER_ADMIN.
 * Behavior: Describe the full flow of this function in order (e.g., Validate -> Authorize -> Create -> Emit event -> Respond).
 * Responses: List all response codes this service can return (e.g., 201, 400, 401, 403, 404, 409, 500).
 * Side effects: Describe all side effects (logs, audit records, notifications, cache invalidation, file writes, etc.).
 */
/**
 * Change Log
 * 2025-09-15: Create. (Jasmine)
 */
```

### Services - Inline Input and Repository Comments
- Every service function must include two inline comments at the top of the function body:
```ts
// Inputs: params = context.params, query = context.query, body = context.body.
// Data access: repository calls below (if any).
```
- Keep these comments directly under the opening brace and do not add blank lines after them.

### Services - Step Comments Inside try Blocks
- Every service function must include a step-by-step comment block immediately after the top-level `try {` line to document the flow:
```ts
// Step 1: Read inputs (params, query, body) and normalize defaults.
// Step 2: Build query filters or payloads.
// Step 3: Read/write via repository.
// Step 4: Map/format response data.
// Step 5: Return standardized response.
```
- Keep the wording consistent across services so scanning is easy.

### Controllers - Required Comments
- Every controller file must include a file-level purpose block.
- Every exported controller handler must include a docblock.
```ts
/**
 * Controller Purpose - <entity>
 * Summary: HTTP handlers for the <entity> module that delegate to the service layer.
 * Notes: Controllers must not include business logic.
 */

/**
 * HTTP Handler - <handlerName>
 * Summary: Build service context, call the service, and send the response.
 * Inputs: req, res, next.
 * Behavior: Build context -> Call service -> Send response -> Forward errors.
 * Responses: Service-defined.
 * Side effects: None.
 */
```

### Repositories - Required Comments
- Every repository file must include a file-level purpose block.
```ts
/**
 * Repository Purpose - <entity>
 * Summary: Database access helpers for the <entity> module.
 * Notes: Repositories must not contain HTTP or business logic.
 */
```

### Module Types - Required Comments
- Every `<entity>.types.ts` file must include a file-level service contract block.
```ts
/**
 * Service Contract - <entity>
 * Summary: Typed service interface for the <entity> module.
 * Notes: Controllers bind to this contract and services must implement it.
 */
```

### Response Contract
- Use the shared formatter in `myjoytravel_be/src/utils/formatter.ts`.
- Standard response shape:
  - `formatResponse(status, message, data)` -> `{ status, message, data }`
  - `formatResponseMetadata(status, message, data, metadata)` -> `{ status, message, data, metadata }`
- Error responses must include a stable error code and a human-readable message.
- Do not return raw database or stack errors to the client.

### Validation Rules
- Validate `body`, `params`, and `query` with schemas on every endpoint.
- Use `.strict()` (or equivalent) for create/update input to reject unknown fields.
- No handler should consume unvalidated input.
```ts
// Example: shared validator (body/params/query)
// validate(schema, 'body' | 'params' | 'query')
router.get(
  '/:id',
  validate(<Entity>Schema.paramsSchema, 'params'),
  <Entity>Controller.getById,
);

router.get(
  '/',
  validate(<Entity>Schema.querySchema, 'query'),
  <Entity>Controller.list,
);

router.post(
  '/',
  validate(<Entity>Schema.createSchema, 'body'),
  <Entity>Controller.create,
);

router.put(
  '/:id',
  validate(<Entity>Schema.paramsSchema, 'params'),
  validate(<Entity>Schema.updateSchema, 'body'),
  <Entity>Controller.update,
);

router.patch(
  '/:id',
  validate(<Entity>Schema.paramsSchema, 'params'),
  validate(<Entity>Schema.patchSchema, 'body'),
  <Entity>Controller.patch,
);
```

### Authorization Tagging
- Each route must declare required roles/permissions (comment and middleware).
- Use a consistent tag format at the top of the route handler or route file:
```ts
// Auth: roles = [SUPER_ADMIN, ADMIN], permissions = [COOPERATIVE_WRITE]
```
- Enforcement must be in middleware, not only comments.
- Prefer role and permission checks in a single auth middleware per route.
- Unauthorized access must return a consistent error response.
Example (role and permission route guard):
```ts
// Auth: roles = [SUPER_ADMIN], permissions = [COOPERATIVE_CREATE]
router.post(
  '/',
  authGuard(['SUPER_ADMIN'], ['COOPERATIVE_CREATE']),
  validate(<Entity>Schema.createSchema, 'body'),
  <Entity>Controller.create,
);
```

### Permissions Registry
- Define the permission set in a single source of truth (e.g., `src/constants/permissions.ts`).
- Define roles in `src/constants/roles.ts`, mapped 1:1 with the `Role` enum in `prisma/schema.prisma`.
- Define role-to-permission mapping in `src/config/rbac.ts`.
- Do not use inline permission strings in routes or services; import constants instead.
- Ordering rule: list permissions grouped by entity in the same order as entities appear in `prisma/schema.prisma`. This keeps lookups consistent and easy to maintain.
- Each permission group must include a short comment header explaining the entity and the CRUD actions covered.
Example registry and mapping:
```ts
// src/constants/roles.ts
export enum Role {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  USER = 'USER',
  MODERATOR = 'MODERATOR',
}

// src/constants/permissions.ts
export enum Permission {
  // Cooperative
  COOPERATIVE_CREATE = 'COOPERATIVE_CREATE',
  COOPERATIVE_READ = 'COOPERATIVE_READ',
  COOPERATIVE_UPDATE = 'COOPERATIVE_UPDATE',
  COOPERATIVE_DELETE = 'COOPERATIVE_DELETE',
}

// src/config/rbac.ts
export const RBAC: Record<Role, Permission[]> = {
  [Role.SUPER_ADMIN]: [
    Permission.COOPERATIVE_CREATE,
    Permission.COOPERATIVE_READ,
    Permission.COOPERATIVE_UPDATE,
    Permission.COOPERATIVE_DELETE,
  ],
  [Role.MODERATOR]: [Permission.COOPERATIVE_READ],
};
```

### Pagination and Filtering
- List endpoints must support pagination, sorting, and filters.
- Define defaults and a max limit to prevent heavy queries.
- Standard query params:
  - `page` (default 1)
  - `limit` (default 20, max 100)
  - `sortBy` (column name)
  - `sortOrder` (asc | desc, default asc)
  - `q` (free-text search)
- Always return pagination metadata: `{ page, limit, total, totalPages }`.

### Error Handling Rules
- All errors must flow through the central error handler.
- Do not call `next()` after sending a response.
- Always `return` after `res.status(...).json(...)`.
- Use a shared error type (e.g., `AppError`) with `status`, `code`, `message`, and optional `details`.
- Wrap async route handlers with an error wrapper so rejected promises reach the error handler.
- Log errors once in the error handler; do not log the same error in services and again in the handler.
- Do not expose stack traces or raw database errors to clients.

### Logging Standard
- Use a structured logger (no `console.log` in production code).
- Include request ID and key metadata for each request.
- Use a single base logger and create named child loggers for `http`, `action`, and `error`.
- Recommended folder layout:
  - `src/utils/loggers/base.logger.ts`
  - `src/utils/loggers/http.logger.ts`
  - `src/utils/loggers/action.logger.ts`
  - `src/utils/loggers/error.logger.ts`
- Keep one output format (JSON) and configure levels and transports in the base logger.

### Package.json and Dependency Hygiene
- Runtime dependencies must be in `dependencies`, not `devDependencies`.
- Build/test tooling must be in `devDependencies`.
- `@types/*` packages must stay in `devDependencies`.
- `@prisma/client` must be in `dependencies`; `prisma` must be in `devDependencies`.
- `husky` must be in `devDependencies`.
- Do not add Node built-in modules (e.g., `crypto`, `fs`, `path`) to dependencies.
- `start` must run compiled output (e.g., `node dist/index.js`); `dev` can use `tsx`/`nodemon`.

### Config Validation
- Validate required env vars at startup (fail fast on missing/invalid values).
- Validation must be environment-specific: load and validate the key set for the active `NODE_ENV`.
- Config must switch by `NODE_ENV` and load `.env.[NODE_ENV]`.

### JWT and Token Standards
- Token payload must include `userId` and `role` (and `sessionId` if refresh tokens are stored server-side).
- Use `issuer`, `audience`, and `subject` claims for all tokens.
- Access and refresh tokens must use different secrets and different expirations.
- Provide verification helpers for access and refresh tokens (with consistent error handling).
- Implement refresh rotation and revoke old refresh tokens when a new one is issued.
- Store refresh tokens securely (hashed in DB or allowlist table); do not store raw refresh tokens.
- Add a blacklist or token version field to support forced logout and password reset invalidation.
- Always validate token expiry and signature on every protected request.
- Expose a single token service module that includes:
  - `generateAccessToken`
  - `verifyAccessToken`
  - `generateRefreshToken`
  - `verifyRefreshToken`
  - `rotateRefreshToken`

### Schemas - Separate by Purpose
For each entity, schemas must be split into separate files and defined by purpose:
- **Public schema**: validates the full structure of an entity sent from the system to the client (single-item/detail responses).
- **Minify schema**: minimal subset used for lightweight APIs (e.g., list endpoints). List items must include fewer attributes than the single-item response.
- **Magnify schema**: expanded shape that includes joined/related data from other tables (references and aggregates).
- **Create schema**: validates input for create operations.
- **Update schema**: validates input for update operations.

Recommended Zod approach (base + derived schemas):
- Define a base schema for the entity, then derive variants with `.pick`, `.omit`, `.extend`, and `.partial`.
- Example flow: `entityBaseSchema` -> `entityPublicSchema` (base), `entityMinifySchema` (pick), `entityMagnifySchema` (extend), `entityCreateSchema` (pick + strict), `entityUpdateSchema` (partial).

### Schemas - Folder Grouping
- Group schemas by entity in folders for maintainability.
- Example:
  - `src/schemas/blogs/index.ts`
  - `src/schemas/blogs/blogs.public.schema.ts`
  - `src/schemas/blogs/blogs.minify.schema.ts`
  - `src/schemas/blogs/blogs.delete.schema.ts`
- Import schemas via the folder index:
```ts
import * as BlogSchema from '../schemas/blogs';
```

### Schemas - Field Comments
- Every schema field must have a short, clear comment above it (similar to Prisma schema field comments).
- Use block comments (`/* ... */`) for field comments.
- Do not use inline trailing comments on the same line as the field.
- Comments must be consistent, concise, and descriptive of the field meaning (not just the field name).

### Schema Read/Write Separation
- Output schemas (public/minify/magnify) are for responses only.
- Input schemas (create/update) are for requests only.
```ts
// Output schemas (response)
// - public: full detail response shape
// - minify: list response shape
// - magnify: expanded response shape with joins

// Input schemas (request)
// - create: create payload validation
// - update: update payload validation
```

### Data Folder - Mock Data with Clear Description
All mock data files must start with a description of the data structure and example keys at the top of the file.

### Utils - Objective and Version Blocks
All utility/helper functions must include objective and change log blocks similar to services.

### Config - Environment Switching
Config must include a mechanism to switch environment based on `NODE_ENV` (e.g., load `.env.[NODE_ENV]`).

### Entry Points - `app.ts` and `index.ts`
- `app.ts` must build and export the Express app only (middleware, routes, error handler order). No `listen` and no process side effects.
- `index.ts` is the bootstrap entrypoint: load config, initialize runtime dependencies (db clients, caches), and call `app.listen`.
- `index.ts` should be the only place that starts the server or connects resources with side effects.
- Keep business logic out of both files; move it to routes/services/middlewares.
- Recommended structure:
  - `app.ts`: `createApp(deps)` or `buildApp(deps)` returns `Express` instance, accepts injected dependencies (db client, config, logger).
  - `index.ts`: loads config, creates dependencies, calls `createApp`, starts server, and wires graceful shutdown.
- Middleware order in `app.ts` must be explicit:
  1. Parsers (json/urlencoded)
  2. Session/Auth middleware
  3. Request logging
  4. Routes
  5. Error handler (last)

### Naming and File Conventions
- Entity names: singular, PascalCase in code, snake_case or kebab-case for filenames (pick one and keep consistent per repo).
- File naming (kebab-case): use `long-entity` for multi-word entities in filenames.
- No underscores in filenames; use kebab-case only.
- Service files: `entity.service.ts`.
- Controller files: `entity.controller.ts`.
- Repository files: `entity.repository.ts`.
- Route files: `entity.routes.ts`.
- Schema files: `entity.schema.ts` (or `entity.create.schema.ts`, `entity.update.schema.ts` when split).
- Script files: `<action>-<entity>-<task>.script.ts` (kebab-case, singular nouns). Example: `update-sim-slug.script.ts`.

### Routes - Index Export and Imports
- A single route index file must export/register all routes (route aggregator).
- Group routes by entity in folders:
  - `src/modules/blog/blog.routes.ts`
  - `src/modules/blog/index.ts`
- Each route file must import its schema and controller modules explicitly (replace with your entity):
```ts
import * as <Entity>Schema from '../../schemas/<entities>';
import * as <Entity>Controller from './<entity>.controller';
```

### Prisma Schema Style
- Enums must be defined before models.
- Each model must include comments and group fields by purpose in this order:
  1. Core attributes (id, name, basic fields)
  2. Computed fields (if any)
  3. Relations: to-one first, then to-many
- Use section comments inside models to separate groups for readability and maintenance.
- Align inline field comments vertically within each `model` or `enum` block (same comment column per block).
- Each enum and model must include an objective comment directly above its definition.
Example:
```prisma
model <Entity> {
  // Core attributes
  id        String    @id @default(cuid())
  name      String    @db.VarChar(255)
  createdAt DateTime  @default(now())

  // Relations
  parent    <Entity>? @relation("Parent", fields: [parentId], references: [id])
  parentId  String?
  children    <Entity>[]                       // Child entities
}
```

### Prisma Seed Convention
- Use a single entrypoint: `prisma/seed/seed.ts`.
- Per-entity seed files live in `prisma/seed/` and export `seed<Entity>()`.
- File naming: `<entity>.seed.ts` (kebab-case) and must map 1:1 to the Prisma model name.
- Function naming: `seed<Entity>` (camelCase) and exported as a named export.
- Data constants: `<entity>SeedData` or `<entity>SeedInputs` (camelCase) per file; no anonymous arrays.
- Each seed file should include a short objective header comment at the top describing the entity and dependencies.
- Seed order in `seed.ts` must follow dependency order (parents before children).
- Seed functions must be idempotent (use `upsert` or check-before-create).
- Use one shared `PrismaClient` instance; do not call `$disconnect()` inside individual seed files.
- The entrypoint is responsible for connect/disconnect and error handling.
- Seed data must be clear and deterministic; avoid randomness unless explicitly required.

### Testing Baseline
- Each entity must have basic service unit tests.
- Each entity must have route integration tests covering CRUD.
- Service unit tests must live next to services: `src/services/__tests__/`.
- Provide a standard unit test template file for each service (name: `<entities>.service.spec.ts`).
- Use Jest for unit tests.

Sample unit test template (service):
```ts
import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import * as <Entity>Service from '../<entities>.service';

// Mock dependencies here (db, logger, etc.)

describe('<Entity>Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should <action>', async () => {
    // Arrange
    // Act
    // Assert
  });
});
```

---

## TypeScript Standards (All Repos)

### Naming
- Use meaningful, pronounceable names. Avoid one-letter or ambiguous abbreviations.
- Avoid mental mapping; prefer explicit names.
- Do not add unneeded context in variable names.

### Naming Conventions
- Variables and functions: `camelCase`.
- Class, interface, type, enum names: `PascalCase`.
- Class members and method parameters: `camelCase`.
- Enum members: `camelCase`.
- Booleans: prefix with `is`, `has`, or `are`; avoid negative names.

### Brackets and Spacing
- Use OTBS (opening brace on same line).
- Never omit curly braces.
- Use 2 spaces, not tabs.
- Use semicolons.

### Comments
- Comments must be English only.
- No empty/noise comments; avoid restating obvious code.
- Use TODO comments only with an issue reference (e.g., `TODO: ... PROJ-123`).
- Single-line comments must have exactly one space after `//`.
- Single-line comments must be preceded by a single blank line and never followed by extra blank lines.
- Do not use inline trailing comments after code statements; place comments above the statement.

### Barrels
- Barrel files are named `index.ts` only.
- Do not import a barrel from inside a file that is exported by that same barrel (avoid circular dependencies).

---

## Frontend Standards (myjoytravel_client_fe, myjoytravel_admin_fe)

### Imports
- Remove unused imports.
- Group imports with one blank line between groups in this order:
  1. Framework imports
  2. UI library imports
  3. External library imports
  4. Type imports
  5. App-specific imports (services, classes, interfaces, enums)

### TypeScript Aliases
- Prefer path aliases over deep relative paths.

### Class Accessors
- Always specify `public`, `protected`, or `private` on class members and methods.
- Order members: `private`, `protected`, `public`.

### Component Structure
- Order sections:
  1. Inputs
  2. Outputs
  3. View child/content child
  4. Lifecycle hooks
  5. Public methods
  6. Private methods
  7. Getters/setters
  8. Other methods
- Separate each section with a blank line.

### RxJS Pattern
- Use private `Subject` + public `Observable` pattern for shared streams.

### Template Usage
- Do not access services directly in HTML templates; expose values via component properties.

### Subscription Management
- Prefer `takeUntil` + a private teardown `Subject` for subscription cleanup.

---

## Language Policy
- **English only** in code, comments, and documentation within the codebase. No Vietnamese comments.
- **ASCII only**. Avoid non-ASCII characters to prevent encoding issues.
- **No emoji** in code, comments, or documentation.

---

*Last Updated: March 20, 2026*  
*Authority: Engineering Standards Board*
