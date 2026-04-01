# Billiont Tools — Design System

## Color Palette

| Token          | Hex       | Usage                                                        |
|----------------|-----------|--------------------------------------------------------------|
| Primary        | #512DA8   | Primary actions, active states, brand color (deep purple)    |
| Primary Light  | #E3DFFF   | Backgrounds, hover states, subtle accents (light lavender)   |
| Grey           | #606060   | Secondary text, inactive states, dividers                    |
| Dark           | #282828   | Primary text, dark backgrounds, high-contrast elements       |
| White          | #FFFFFF   | Backgrounds, text on dark surfaces                           |

---

## Typography

### Font Families
- **Heading:** Lato
- **Body Text:** Inter

### Type Scale — Standard (Default)

| Style             | Font  | Size  | Weight        | Weight Value | Use Case                          |
|-------------------|-------|-------|---------------|--------------|-----------------------------------|
| H1 (Main Heading) | Lato  | 25px  | Bold          | 700          | Page titles, primary headings     |
| H2 (Section Heading) | Lato | 21px | Semi-Bold     | 600          | Section headings, card titles     |
| H3 (Subheading)   | Lato  | 17px  | Medium        | 500          | Subheadings, group labels         |
| Body Text         | Inter | 16px  | Regular       | 400          | Paragraphs, descriptions, labels  |
| Body Text -2 (Small) | Inter | 12px | Regular      | 400          | Captions, metadata, hints         |

### Type Scale — Medium

| Style             | Font  | Size  | Weight        | Weight Value | Use Case                          |
|-------------------|-------|-------|---------------|--------------|-----------------------------------|
| H1 (Main Heading) | Lato  | 27px  | Extra Bold    | 800          | Hero titles, featured headings    |
| H2 (Section Heading) | Lato | 23px | Bold         | 700          | Section headings                  |
| H3 (Subheading)   | Lato  | 19px  | Semi-Bold     | 600          | Subheadings                       |
| Body Text         | Inter | 18px  | Medium        | 500          | Paragraphs, descriptions          |
| Body Text -2      | Inter | 14px  | Regular       | 400          | Captions, secondary info          |

### Type Scale — Large

| Style             | Font  | Size  | Weight        | Weight Value | Use Case                          |
|-------------------|-------|-------|---------------|--------------|-----------------------------------|
| H1 (Main Heading) | Lato  | 29px  | Black         | 900          | Hero titles, large displays       |
| H2 (Section Heading) | Lato | 25px | Extra Bold   | 800          | Section headings                  |
| H3 (Subheading)   | Lato  | 21px  | Bold          | 700          | Subheadings                       |
| Body Text         | Inter | 20px  | Medium        | 500          | Paragraphs, descriptions          |
| Body Text -3 (Large) | Inter | 16px | Regular      | 400          | Captions, secondary info          |

### Font Weight Reference

| Name       | Value |
|------------|-------|
| Black      | 900   |
| Extra Bold | 800   |
| Bold       | 700   |
| Semi-Bold  | 600   |
| Medium     | 500   |
| Regular    | 400   |

---

## Shadows

Base shadow color: `#000000` at 25% opacity

| Name                      | CSS Value                                  | Use Case                         |
|---------------------------|--------------------------------------------|----------------------------------|
| Flatter (No Shadow)       | `box-shadow: none`                         | Flat UI, minimal surfaces        |
| Flat Subtle               | `box-shadow: 0px 1px 3px rgba(0,0,0,0.25)`| Borders, low-elevation elements  |
| Normal Shadow (Soft)      | `box-shadow: 0px 4px 8px rgba(0,0,0,0.1)` | Cards, modals, elevated surfaces |
| 3D Shadow (Depth)         | `box-shadow: 0px 8px 16px rgba(0,0,0,0.2)`| Dialogs, floating panels         |

---

## Borders

| Name                 | Width   | Style  | Use Case                                          |
|----------------------|---------|--------|---------------------------------------------------|
| Normal (Default)     | 1.5px   | solid  | Primary buttons, input fields, containers         |
| Outlined (Subtle)    | 1px     | solid  | Secondary buttons, card outlines, non-prominent UI|
| Soft (Minimal)       | 0.5px   | solid  | Dividers, subtle separators, light UI accents     |

---

## Corner Radius (Apple HIG)

| Element                    | Corner Radius     |
|----------------------------|-------------------|
| App Icons (iOS/macOS)      | 27% of size       |
| Buttons (Default iOS)      | 13px              |
| Alert Dialogs              | 20px              |
| Cards (Widgets, Modals)    | 16px              |
| Tab Bar / Sheet            | 10px              |
| Floating Buttons (FABs)    | 28px              |
| Mac Catalyst Window        | 38px              |

---

## Spacing & Layout

### Base Layout
- **Aspect Ratio:** 19:9
- **Resolution (480p):** 1013 × 480 pixels

### Balanced Layout — Activity Pages

| Token | Value | Use Case                                                     |
|-------|-------|--------------------------------------------------------------|
| xs    | 6px   | Gap between image and text                                   |
| sm    | 8px   | Nav bar vertical padding, vertical gap between list items    |
| md    | 16px  | Horizontal gaps, card spacing, padding inside cards          |
| lg    | 24px  | Padding for whole content area                               |

| Property                                    | Value |
|---------------------------------------------|-------|
| Vertical Gap Between Image and Text         | 6px   |
| Horizontal Gap Between Elements             | 16px  |
| Padding — Whole Content Area                | 24px  |
| Padding — Items in "Items to Match" Section | 16px  |
| Gap Between Cards (H & V)                   | 16px  |
| Padding Inside Each Card                    | 16px  |
| Spacing Between Elements in Main Card       | 16px  |
| Padding for Name Cards                      | 8px   |
| Vertical Gap Between Items (Items to Match) | 8px   |

### Airy Layout — Other Pages

| Token | Value | Use Case                                     |
|-------|-------|----------------------------------------------|
| xs    | 8px   | Gap between icons and text                   |
| sm    | 12px  | Name card padding, vertical gap between items|
| md    | 16px  | Horizontal gaps between elements             |
| lg    | 24px  | Card gaps, card padding, item padding        |
| xl    | 30px  | Whole content area padding                   |

| Property                                    | Value |
|---------------------------------------------|-------|
| Gap Between Image and Text                  | 8px   |
| Horizontal Gap Between Elements             | 16px  |
| Padding — Whole Content Area                | 30px  |
| Padding — Individual Items                  | 24px  |
| Gap Between Cards (H & V)                   | 24px  |
| Padding Inside Each Card                    | 24px  |
| Spacing Between Elements in Main Card       | 24px  |
| Padding for Name Cards                      | 12px  |
| Vertical Gap Between Items                  | 12px  |

> **Layout Rule:** Use **Balanced Layout** for Activity pages. Use **Airy Layout** for all other pages.
