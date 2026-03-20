# FE CREDIT — Style Guide for Partner Interface

> Design reference documentation based on analysis of the website [fecredit.com.vn](https://www.fecredit.com.vn/)  
> Purpose: Build an interface that aligns with FE CREDIT brand identity

---

## 1. Brand & Identity

| Information | Details |
|---|---|
| **Brand Name** | FE CREDIT (VPB SMBC FC) |
| **Slogan** | "Making Millions of Dreams Come True" |
| **Positioning** | Consumer Credit — Fast, Easy, Trustworthy |
| **Logo** | SVG vector, on white or dark background |
| **Logo URL** | `https://www-cdn.fecredit.com.vn/media/20ymppzv/fec-logo.svg` |

---

## 2. Color Palette

### Primary Colors

```css
--color-primary:       #E8002D;   /* FE CREDIT Red — CTA, primary button, accent */
--color-primary-dark:  #C0001F;   /* Dark Red — hover state */
--color-primary-light: #FF4D6D;   /* Light Red — highlight, tag */
```

### Secondary Colors

```css
--color-secondary:     #1A1A2E;   /* Dark Blue-Black — title text, header */
--color-secondary-mid: #2D3561;   /* Navy Blue — gradient, section background */
```

### Neutral Colors

```css
--color-white:         #FFFFFF;
--color-bg-light:      #F5F6FA;   /* Light section background */
--color-bg-section:    #F0F2F8;   /* Section divider background */
--color-border:        #E0E3EF;   /* Border, divider */
--color-text-primary:  #1A1A2E;   /* Primary text */
--color-text-secondary:#5A607F;   /* Secondary text, description */
--color-text-muted:    #9AA1B9;   /* Placeholder, muted label */
```

### Status Colors

```css
--color-success:       #00A651;   /* Green — success */
--color-error:         #E8002D;   /* Red — error */
--color-warning:       #F5A623;   /* Orange — warning */
--color-info:          #2D3561;   /* Blue — info */
```

---

## 3. Typography

### Font Family

FE CREDIT uses modern **sans-serif** typefaces without serifs — priority order:

```css
font-family: 'Be Vietnam Pro', 'Nunito Sans', 'Inter', sans-serif;
```

> *If not using Google Fonts, fallback: `Arial, Helvetica, sans-serif`*

### Font Size System

```css
/* Large Title (Hero / Banner) */
--text-hero:    clamp(28px, 4vw, 48px);
font-weight: 700–800;

/* Section Title (h2) */
--text-h2:      clamp(22px, 3vw, 36px);
font-weight: 700;

/* Small Title (h3) */
--text-h3:      clamp(18px, 2.5vw, 24px);
font-weight: 600;

/* Body Text */
--text-body:    16px;
font-weight: 400;
line-height: 1.6;

/* Small Text (caption, label) */
--text-sm:      14px;
--text-xs:      12px;
```

### Typography Rules

- Titles: **Bold / ExtraBold**, sometimes uppercase for tags/badges
- Body text: Regular, `--color-text-primary`
- Descriptions: Regular, `--color-text-secondary`
- Highlighted numbers (stats): **Bold**, red or navy color

---

## 4. Buttons

### Primary CTA Button

```css
.btn-primary {
  background-color: #E8002D;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-primary:hover {
  background-color: #C0001F;
}
```

### Secondary Button (Outline)

```css
.btn-secondary {
  background-color: transparent;
  color: #E8002D;
  border: 2px solid #E8002D;
  border-radius: 8px;
  padding: 12px 26px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: #E8002D;
  color: #FFFFFF;
}
```

### White Button (on dark banner)

```css
.btn-white {
  background-color: #FFFFFF;
  color: #E8002D;
  border-radius: 8px;
  padding: 14px 28px;
  font-weight: 700;
}
```

### Button Sizes

| Size | Padding | Font size |
|---|---|---|
| Small | `8px 16px` | 14px |
| Medium | `12px 24px` | 16px |
| Large | `16px 32px` | 18px |
| Full-width | `14px` (top/bottom) | 16px |

---

## 5. Form & Input

```css
.form-input {
  border: 1.5px solid #E0E3EF;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  color: #1A1A2E;
  background: #FFFFFF;
  width: 100%;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #E8002D;
  outline: none;
  box-shadow: 0 0 0 3px rgba(232, 0, 45, 0.12);
}

.form-input::placeholder {
  color: #9AA1B9;
}

.form-label {
  font-size: 14px;
  font-weight: 600;
  color: #1A1A2E;
  margin-bottom: 6px;
  display: block;
}

.form-required::after {
  content: ' *';
  color: #E8002D;
}
```

### Dropdown / Select

- Border radius `8px`, border color `--color-border`
- When active: border changes to red
- Chevron icon color red `#E8002D`

### Checkbox

- Check color: `#E8002D`
- Border: `2px solid #E0E3EF`
- Checked: background `#E8002D`

---

## 6. Card & Product

```css
.card {
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(26, 26, 46, 0.08);
  padding: 24px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.card:hover {
  box-shadow: 0 8px 32px rgba(232, 0, 45, 0.12);
  transform: translateY(-4px);
}
```

### Product Card

- Has icon/illustration image on top
- Product title: **Bold**, 18–20px
- Short description: Regular, `--color-text-secondary`
- CTA button at bottom

---

## 7. Header & Navigation

### Header Structure

```
[Logo]  [Nav Menu: Products | News | Support]  [Login / CTA]
```

### Style

```css
header {
  background: #FFFFFF;
  box-shadow: 0 2px 12px rgba(26, 26, 46, 0.08);
  height: 72px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

nav a {
  color: #1A1A2E;
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
}

nav a:hover {
  color: #E8002D;
  background: rgba(232, 0, 45, 0.06);
}
```

### Top Bar (above header)

- White background, small font 13px
- Links: About Us | FE ONLINE 2.0 | Contact
- Text color: `--color-text-secondary`

---

## 8. Hero Banner

```css
.hero-banner {
  position: relative;
  min-height: 500px;           /* Desktop */
  border-radius: 0;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

.hero-content {
  position: absolute;
  left: 8%;
  top: 50%;
  transform: translateY(-50%);
  max-width: 500px;
  color: #FFFFFF;
}

.hero-title {
  font-size: clamp(28px, 3.5vw, 44px);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 12px;
}

.hero-subtitle {
  font-size: 18px;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 24px;
}
```

- Banner may contain dark gradient overlay on left side
- CTA button white or red depending on background

---

## 9. Section & Layout

### Section Spacing

```css
section {
  padding: 64px 0;           /* Desktop */
}

@media (max-width: 768px) {
  section {
    padding: 40px 0;
  }
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}
```

### Alternating Section Backgrounds

- Section 1: White background `#FFFFFF`
- Section 2: Light background `#F5F6FA`
- Dark section (app, achievements): Navy background `#1A1A2E` or gradient `#1A1A2E → #2D3561`

### Grid Layout

```css
/* Products: 4 columns */
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* News: 3 columns */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 1024px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .product-grid,
  .news-grid    { grid-template-columns: 1fr; }
}
```

---

## 10. Tab Component

```css
.tab-nav {
  display: flex;
  border-bottom: 2px solid #E0E3EF;
  margin-bottom: 24px;
}

.tab-item {
  padding: 12px 24px;
  font-weight: 600;
  color: #5A607F;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  margin-bottom: -2px;
  transition: color 0.2s, border-color 0.2s;
}

.tab-item.active,
.tab-item:hover {
  color: #E8002D;
  border-bottom-color: #E8002D;
}
```

---

## 11. Badge & Tag

```css
.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-primary   { background: #FFE5EA; color: #E8002D; }
.badge-news      { background: #E8002D; color: #FFFFFF; }
.badge-promo     { background: #FFF3CD; color: #856404; }
.badge-success   { background: #D4EDDA; color: #155724; }
```

---

## 12. Highlighted Statistics (Stats)

```css
.stat-block {
  text-align: center;
}

.stat-number {
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 800;
  color: #E8002D;
  display: block;
}

.stat-label {
  font-size: 15px;
  color: rgba(255,255,255,0.85);  /* on dark background */
  margin-top: 4px;
}
```

**Key FE CREDIT metrics:**
- 97% Customer Satisfaction
- Over 13,500 retail network
- Over 724,000 insurance policies issued
- Over 2 million app downloads

---

## 13. Footer

```css
footer {
  background: #1A1A2E;
  color: #FFFFFF;
  padding: 56px 0 32px;
}

.footer-logo { margin-bottom: 16px; }

.footer-tagline {
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 20px;
}

.footer-nav-title {
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #FFFFFF;
  margin-bottom: 16px;
}

.footer-nav-link {
  font-size: 14px;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  line-height: 2;
  display: block;
  transition: color 0.2s;
}

.footer-nav-link:hover { color: #E8002D; }

.footer-copyright {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 24px;
  margin-top: 40px;
}
```

### Social Icons Footer

Channels: Facebook, Instagram, LinkedIn, YouTube, TikTok, Zalo  
Style: 44×44px icons, dark background, red hover

---

## 14. Hotline & Contact

```
Loan Support (New Customers): 028 3551 6868
Loan Customers (Existing): 1900 6535
Credit Card: 1900 6939
Address: 144 Cong Hoa, Bay Hien Ward, HCMC
```

---

## 15. Responsive Breakpoints

```css
/* Mobile first */
--bp-sm:   576px;   /* Small mobile */
--bp-md:   768px;   /* Tablet */
--bp-lg:   1024px;  /* Laptop */
--bp-xl:   1280px;  /* Desktop */
--bp-xxl:  1440px;  /* Wide screen */
```

---

## 16. Effects & Animation

```css
/* Standard transition */
transition: all 0.2s ease;
transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);

/* Hover card lift */
transform: translateY(-4px);

/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Elevated box shadow */
box-shadow: 0 4px 20px rgba(26, 26, 46, 0.08);   /* default */
box-shadow: 0 8px 32px rgba(232, 0, 45, 0.15);   /* hover */
```

---

## 17. Icon Style

- **Style**: Line icon / Flat icon, clean, clear
- **Size**: 24px (inline), 44px (feature block), 64px (hero icon)
- **Color**: `#E8002D` (primary), `#FFFFFF` (on dark background), `#5A607F` (nav/muted)
- **Format**: SVG preferred

---

## 18. Reference Product List

| Product | URL Path |
|---|---|
| Flexible Cash | `/flexible-cash/` |
| Motorbike Purchase Loan | `/motorbike-purchase-loan/` |
| Phone & Appliance Purchase Loan | `/phone-appliance-purchase-loan/` |
| Credit Card | `/credit-card/` |
| Linked Insurance | `/linked-insurance/` |
| Buy Now Pay Later | `/buy-now-pay-later/` |

---

## 19. Tone of Voice & UX Writing

- **Language**: English, friendly, easy to understand
- **Tone**: Positive, reassuring, customer-benefit focused
- **Typical CTA**: "Sign Up Now", "Learn More", "Explore Now", "Find Out Now"
- **Key Keywords**: Interest from 0%, fast, easy, flexible, special offer, high limit

---

## 20. Design Checklist

- [ ] Use red `#E8002D` for all primary CTAs
- [ ] Sans-serif font, minimum 16px for body text
- [ ] Buttons have rounded corners `border-radius: 8px`
- [ ] Cards have subtle `box-shadow`, lift on hover
- [ ] Responsive mobile-first approach
- [ ] FE CREDIT logo prominently displayed
- [ ] Forms follow validation with red color
- [ ] Footer dark navy background with muted links
- [ ] Section spacing `padding: 64px 0` (desktop)
- [ ] Stats/numbers use red for emphasis

---

*File created by Claude • Based on analysis of fecredit.com.vn • March 2026*
