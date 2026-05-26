# Design System Skill

## Description
This skill encodes the complete design system, UI/UX patterns, and component conventions used in this Angular portfolio project. Use it whenever you create a **new page, section, or component** to ensure visual and structural consistency with the existing codebase.

## Activate When
- Creating a new section (e.g. `app-blog`, `app-testimonials`)
- Adding a new page or route
- Building a new UI component (modal, card, form, list)
- Adding responsive or dark-theme support to existing code

---

## 1. Design Tokens

All tokens live in `src/styles.css` under `:root`. Reference them via `var(--token-name)`.

### 1.1 Colors

| Variable | Light Value | Dark Value | Usage |
|---|---|---|---|
| `--hue-color` | `250` | `250` | Purple hue (change to 214 for blue) |
| `--first-color` | `hsl(250, 69%, 61%)` | same | Primary brand color |
| `--first-color-second` | `hsl(250, 69%, 61%)` | `hsl(250, 30%, 8%)` | Secondary surface |
| `--first-color-alt` | `hsl(250, 57%, 53%)` | same | Darker primary (hover, buttons) |
| `--first-color-lighter` | `hsl(250, 92%, 85%)` | same | Light primary (backgrounds) |
| `--title-color` | `hsl(250, 8%, 15%)` | `hsl(250, 8%, 95%)` | Headings |
| `--text-color` | `hsl(250, 8%, 45%)` | `hsl(250, 8%, 75%)` | Body text |
| `--text-color-light` | `hsl(250, 8%, 57%)` | same (or dimmer) | Muted text |
| `--input-color` | `hsl(250, 70%, 96%)` | `hsl(250, 29%, 16%)` | Input/field backgrounds |
| `--body-color` | `hsl(250, 60%, 99%)` | `hsl(250, 28%, 12%)` | Page background |
| `--container-color` | `#fff` | `hsl(250, 29%, 16%)` | Card/surface background |
| `--scroll-bar-color` | `hsl(250, 12%, 90%)` | `hsl(250, 12%, 48%)` | Scrollbar track |
| `--scroll-thumb-color` | `hsl(250, 12%, 80%)` | `hsl(250, 12%, 36%)` | Scrollbar thumb |

**Gradient accent**: `#a855f7` (lighter purple) used alongside `--first-color` for gradients:
```css
background: linear-gradient(135deg, var(--first-color), #a855f7);
```

### 1.2 Typography

| Variable | Mobile | Desktop (>=968px) | Weight |
|---|---|---|---|
| `--big-font-size` | `2rem` (32px) | `3rem` (48px) | 700 |
| `--h1-font-size` | `1.5rem` (24px) | `2.25rem` (36px) | 600 |
| `--h2-font-size` | `1.25rem` (20px) | `1.5rem` (24px) | 600 |
| `--h3-font-size` | `1.125rem` (18px) | `1.25rem` (20px) | 600 |
| `--normal-font-size` | `.938rem` (15px) | `1rem` (16px) | 400 |
| `--small-font-size` | `.813rem` (13px) | `.875rem` (14px) | 400 |
| `--smaller-font-size` | `.75rem` (12px) | `.813rem` (13px) | 400 |

- **Font family**: `'Poppins', sans-serif`
- **Weights**: `--font-medium: 500`, `--font-semi-bold: 600`
- **Import**: Google Fonts `Poppins:wght@400;500;600`

### 1.3 Spacing

| Variable | Value | rem → px |
|---|---|---|
| `--mb-0-25` | `.25rem` | 4px |
| `--mb-0-5` | `.5rem` | 8px |
| `--mb-0-75` | `.75rem` | 12px |
| `--mb-1` | `1rem` | 16px |
| `--mb-1-5` | `1.5rem` | 24px |
| `--mb-2` | `2rem` | 32px |
| `--mb-2-5` | `2.5rem` | 40px |
| `--mb-3` | `3rem` | 48px |

### 1.4 Z-Index Scale

| Variable | Value |
|---|---|
| `--z-tooltip` | 10 |
| `--z-fixed` | 100 |
| `--z-modal` | 1000 |

---

## 2. Theme System (Dark / Light)

### Mechanism
- **Light**: default (no extra class)
- **Dark**: class `dark-theme` on `<body>` element
- Variables prefixed with `body.dark-theme { ... }` override only surface/background colors; `--first-color` and `--first-color-alt` stay unchanged.

### Implementation
```css
body.dark-theme {
  --first-color-second: hsl(var(--hue-color), 30%, 8%);
  --title-color: hsl(var(--hue-color), 8%, 95%);
  --text-color: hsl(var(--hue-color), 8%, 75%);
  --input-color: hsl(var(--hue-color), 29%, 16%);
  --body-color: hsl(var(--hue-color), 28%, 12%);
  --container-color: hsl(var(--hue-color), 29%, 16%);
  --scroll-bar-color: hsl(var(--hue-color), 12%, 48%);
  --scroll-thumb-color: hsl(var(--hue-color), 12%, 36%);
}
```

### Per-component dark overrides
When a component needs specific dark styles (e.g. border colors, icon backgrounds), add a block at the bottom of the component's CSS file:
```css
body.dark-theme .component__card {
  border-color: rgba(255, 255, 255, 0.05);
}
```

### Toggle logic (in navbar)
```typescript
// Reads/writes localStorage keys: 'selected-theme' | 'selected-icon'
// Falls back to window.matchMedia('(prefers-color-scheme: dark)')
// Toggles class 'dark-theme' on body and icon class 'uil-moon' / 'uil-sun'
```

---

## 3. Responsive Breakpoints

Always write responsive rules in the component's own CSS file. Use these breakpoints consistently:

| Breakpoint | Target | Typical Changes |
|---|---|---|
| `max-width: 350px` | Very small phones | Reduce container padding, single column, smaller fonts |
| `max-width: 480px` | Small phones | Narrower containers, 1-col grids, smaller images |
| `max-width: 600px` | Phones | Reduce padding, `flex-direction: column`, smaller titles |
| `max-width: 680px` | Small tablets | Collapse multi-col grids to 1 column |
| `max-width: 767px` | Mobile nav | Fixed bottom nav, mobile menu |
| `max-width: 768px` | Tablets | Smaller card padding, compact filters |
| `max-width: 800px` | Contact form | Contact grid to 1 column |
| `max-width: 900px` | Small laptops | 2-col grids, centered, reduced padding |
| `min-width: 568px` | Small tablets up | Home/About/Skills to 2 columns |
| `min-width: 768px` | Large tablets / desktop | Header at top, horizontal nav |
| `min-width: 968px` | Desktop | Bigger fonts (see typography table) |
| `min-width: 1024px` | Large desktop | Remove container padding, larger elements |

---

## 4. Component Architecture

### File Structure
```
src/app/components/<name>/
  <name>.ts       — Component logic (standalone)
  <name>.html     — Template (Angular control flow)
  <name>.css      — Component styles (no encapsulation, global CSS)
```

### Component Template (TypeScript)
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-<name>',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './<name>.html',
  styleUrls: ['./<name>.css']
})
export class <Name> {
  // state using signal() if reactive data
  // inject PLATFORM_ID for browser-only logic
}
```

### HTML Section Template
```html
<section class="<name> section" id="<name>">
  <div class="<name>__container">
    <!-- Eyebrow -->
    <span class="<name>__eyebrow">Sección</span>
    <h2 class="<name>__title">
      Título <span class="<name>__title-gradient">Gradient</span>
    </h2>
    <div class="<name>__underline"></div>
    <p class="<name>__description">Descripción breve...</p>

    <!-- Content -->
    <div class="<name>__content">
      <!-- your content here -->
    </div>
  </div>
</section>
```

---

## 5. Layout Patterns

### Container
```css
.component__container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
```
- Section containers: `max-width: 1100px`
- Header/global container: `max-width: 1024px`
- CTA/Footer: `max-width: 1200px`

### Section Padding
```css
.component {
  padding: 5rem 0;
  background: var(--body-color);
}
```

### Grid System
Use CSS Grid with `gap: 1.5rem`:
```css
.grid {
  display: grid;
  gap: 1.5rem;
}
```

---

## 6. UI/UX Patterns

### 6.1 Section Header Pattern
Every section follows this exact header structure:
```html
<span class="component__eyebrow">Label</span>
<h2 class="component__title">
  Title <span class="component__title-gradient">Highlight</span>
</h2>
<div class="component__underline"></div>
<p class="component__description">Description text</p>
```

Corresponding CSS:
```css
.component__eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--first-color);
  margin-bottom: 1rem;
  background: rgba(108, 92, 231, 0.1);
  padding: 0.3rem 1rem;
  border-radius: 2rem;
}

.component__title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--title-color);
  margin-bottom: 1rem;
}

.component__title-gradient {
  background: linear-gradient(135deg, var(--first-color), #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.component__underline {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--first-color), #a855f7);
  margin: 0 auto 1.5rem;
  border-radius: 3px;
}

.component__description {
  font-size: 0.9rem;
  color: var(--text-color-light);
  line-height: 1.6;
  max-width: 550px;
  margin: 0 auto 3rem;
}
```

### 6.2 Card Pattern
```css
.component__card {
  background: var(--container-color);
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  overflow: hidden;
}

.component__card:hover {
  transform: translateY(-4px);
  border-color: var(--first-color);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}
```

### 6.3 Button Pattern
```css
.component__button {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.9rem 2rem;
  background: linear-gradient(135deg, var(--first-color), var(--first-color-alt));
  border: none;
  border-radius: 2.5rem;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(108, 92, 231, 0.2);
}

.component__button:hover {
  gap: 1rem;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(108, 92, 231, 0.35);
}
```

### 6.4 Animation Library
Reuse these keyframes (define locally in each component CSS that needs them):

```css
/* Fade in up — most common */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Float (images, decorative elements) */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

/* Soft pulse (glows) */
@keyframes softPulse {
  0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.05); }
}

/* Modal entrance */
@keyframes modalFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes modalSlideUp {
  from { opacity: 0; transform: translateY(30px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
```

### 6.5 Staggered Animation Pattern
```css
.component__card:nth-child(1) { animation-delay: 0.05s; }
.component__card:nth-child(2) { animation-delay: 0.1s; }
.component__card:nth-child(3) { animation-delay: 0.15s; }
/* ... up to 6 */
```

### 6.6 Modal Pattern
```css
.component__modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.component__modal.active-modal {
  opacity: 1;
  visibility: visible;
}

.component__modal-content {
  background: var(--container-color);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.active-modal .component__modal-content {
  transform: scale(1);
}

.component__modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: var(--first-color);
  cursor: pointer;
  transition: transform 0.3s;
}

.component__modal-close:hover {
  transform: rotate(90deg);
}
```

### 6.7 Icon System (Unicons)
Use the `uil` icon library: `<i class="uil uil-<icon-name>"></i>`
- List: https://iconscout.com/unicons
- Imported in `index.html` from `https://unicons.iconscout.com/release/v4.0.8/css/line.css`
- Common icons used: `uil-moon`, `uil-sun`, `uil-arrow-right`, `uil-check-circle`, `uil-times`, `uil-file-download-alt`, `uil-briefcase-alt`, `uil-trophy`, `uil-code-branch`, `uil-web-grid`, `uil-store`, `uil-desktop`, `uil-arrow`, `uil-message`, `uil-rocket`

---

## 7. Section Template

### TypeScript (`features.ts`)
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrls: ['./features.css']
})
export class Features {
  items = [
    { id: 1, title: 'Feature 1', description: '...', icon: 'uil uil-star' },
    { id: 2, title: 'Feature 2', description: '...', icon: 'uil uil-heart' },
  ];
}
```

### HTML (`features.html`)
```html
<section class="features section" id="features">
  <div class="features__container">
    <span class="features__eyebrow">Sección</span>
    <h2 class="features__title">
      Título <span class="features__title-gradient">Destacado</span>
    </h2>
    <div class="features__underline"></div>
    <p class="features__description">Descripción de la sección</p>

    <div class="features__grid">
      @for (item of items; track item.id) {
        <div class="features__card">
          <div class="features__card-icon">
            <i [class]="item.icon"></i>
          </div>
          <h3 class="features__card-title">{{ item.title }}</h3>
          <p class="features__card-description">{{ item.description }}</p>
        </div>
      }
    </div>
  </div>
</section>
```

### CSS (`features.css`)
```css
/* ==================== FEATURES ==================== */
.features {
  padding: 5rem 0;
  background: var(--body-color);
}

.features__container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header */
.features__eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--first-color);
  margin-bottom: 1rem;
  background: rgba(108, 92, 231, 0.1);
  padding: 0.3rem 1rem;
  border-radius: 2rem;
}

.features__title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--title-color);
  margin-bottom: 1rem;
}

.features__title-gradient {
  background: linear-gradient(135deg, var(--first-color), #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.features__underline {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--first-color), #a855f7);
  margin: 0 auto 1.5rem;
  border-radius: 3px;
}

.features__description {
  font-size: 0.9rem;
  color: var(--text-color-light);
  line-height: 1.6;
  max-width: 550px;
  margin: 0 auto 3rem;
  text-align: center;
}

/* Grid */
.features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

/* Card */
.features__card {
  background: var(--container-color);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease backwards;
}

.features__card:hover {
  transform: translateY(-4px);
  border-color: var(--first-color);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

.features__card:nth-child(1) { animation-delay: 0.05s; }
.features__card:nth-child(2) { animation-delay: 0.1s; }
.features__card:nth-child(3) { animation-delay: 0.15s; }

.features__card-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(108, 92, 231, 0.1);
  border-radius: 0.8rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.features__card:hover .features__card-icon {
  background: var(--first-color);
}

.features__card-icon i {
  font-size: 1.3rem;
  color: var(--first-color);
  transition: all 0.3s ease;
}

.features__card:hover .features__card-icon i {
  color: white;
}

.features__card-title {
  font-size: var(--h3-font-size);
  color: var(--title-color);
  margin-bottom: 0.5rem;
}

.features__card-description {
  font-size: var(--small-font-size);
  color: var(--text-color);
  line-height: 1.5;
}

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Dark theme */
body.dark-theme .features__card {
  border-color: rgba(255, 255, 255, 0.05);
}

body.dark-theme .features__card-icon {
  background: rgba(255, 255, 255, 0.05);
}

body.dark-theme .features__card:hover .features__card-icon {
  background: var(--first-color);
}

body.dark-theme .features__eyebrow {
  background: rgba(108, 92, 231, 0.15);
}

/* Responsive */
@media screen and (max-width: 900px) {
  .features__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 600px) {
  .features__container {
    padding: 0 1rem;
  }

  .features__title {
    font-size: 1.5rem;
  }

  .features__grid {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 480px) {
  .features__card-icon {
    width: 40px;
    height: 40px;
  }

  .features__card-icon i {
    font-size: 1.1rem;
  }
}
```

---

## 8. Registration in App

### Add the route (if it's a new page) in `src/app/app.routes.ts`

### Add the component selector to `src/app/app.html`:
```html
<app-<name>></app-<name>>
```

---

## 9. Validation Checklist

Before marking a new section/component as complete, verify:

### Visual Consistency
- [ ] Uses CSS variables for all colors (no hardcoded hex values)
- [ ] Section follows the header pattern (eyebrow → title → underline → description)
- [ ] Uses the proper container width (1100px for sections)
- [ ] Uses the correct spacing scale (var(--mb-*))
- [ ] Uses `font-family: var(--body-font)` and typography variables
- [ ] Uses Unicons for icons (`uil uil-*`)
- [ ] Buttons follow the gradient + rounded pill pattern

### Dark Theme
- [ ] All surface/background colors use CSS variables (no hardcoded whitish values)
- [ ] Dark-specific overrides exist in the component CSS (`body.dark-theme .component__*`)
- [ ] Cards have `border-color: rgba(255,255,255,0.05)` in dark mode
- [ ] Icon backgrounds use `rgba(255,255,255,0.05)` in dark mode

### Responsive
- [ ] Grid collapses appropriately at each breakpoint
- [ ] Text alignment becomes centered at mobile
- [ ] Reduced padding on mobile (<=600px: padding 0 1rem)
- [ ] Images scale down on small screens
- [ ] Buttons become full-width on mobile if appropriate

### Animations & UX
- [ ] Cards have hover effect (translateY(-4px) + shadow)
- [ ] Cards have staggered animation delay
- [ ] FadeInUp animation on cards
- [ ] Icon containers change background on hover
- [ ] Buttons have hover lift effect

### Code Quality
- [ ] Standalone component with proper selector (`app-<name>`)
- [ ] Uses `CommonModule` for structural directives
- [ ] Template uses `@for` control flow (Angular 17+)
- [ ] No unused imports or variables
