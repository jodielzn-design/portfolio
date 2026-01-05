# Jodie Lee — Portfolio Website

A minimalistic portfolio website for a product designer specializing in B2C fintech at Circles.Life.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and builds
- **CSS Modules** for scoped styling
- **Untitled UI** design system principles
- **Framer Motion** for animations
- **Lucide React** for icons

## Features

- ✨ Clean, minimalist design following Untitled UI principles
- 🌓 Light/Dark mode with system preference detection
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🎨 CSS custom properties for theming

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Navbar.module.css
│   │   ├── Hero.tsx
│   │   ├── Hero.module.css
│   │   ├── Work.tsx
│   │   ├── Work.module.css
│   │   ├── About.tsx
│   │   ├── About.module.css
│   │   ├── Contact.tsx
│   │   ├── Contact.module.css
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Customization

### Updating Content

- **Personal Info**: Update `Navbar.tsx`, `Hero.tsx`, and `Footer.tsx`
- **Projects**: Modify the `projects` array in `Work.tsx`
- **Skills & Expertise**: Update arrays in `About.tsx`
- **Contact Links**: Modify `contactLinks` in `Contact.tsx`

### Theming

All design tokens are defined in `src/styles/globals.css`. Modify the CSS custom properties to change:

- Colors (primary, gray scale)
- Typography (font sizes, line heights)
- Spacing scale
- Border radius
- Shadows
- Transitions

## License

© 2026 Jodie Lee. All rights reserved.
