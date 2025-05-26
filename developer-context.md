
**developer-context.md**
```markdown
# Developer Context - Gaming with Tom Website

## 🏗 Architecture Overview

This is a single-page React application built with Vite, using CSS Modules for styling and a component-based architecture.

### Key Architectural Decisions

1. **Single Page Application (SPA)**: All content is on one page with smooth scrolling navigation
2. **CSS Modules**: Scoped styling to prevent conflicts and improve maintainability
3. **Component-based Structure**: Each section is a separate component for modularity
4. **Context API**: Used for theme management (dark/light mode)
5. **Intersection Observer**: For scroll-triggered animations

## 🎨 Design System

### Color Palette
```css
Primary Colors:
- Horror Purple: #8b5cf6
- Horror Green: #10b981

Theme Colors:
Dark Theme (default):
- Background: #0f0f0f
- Card Background: #1a1a1a
- Text: #ffffff
- Muted Text: #a1a1aa
- Border: #374151

Light Theme:
- Background: #ffffff
- Card Background: #f8fafc
- Text: #0f172a
- Muted Text: #64748b
- Border: #e2e8f0
