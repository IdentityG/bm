# B&M Electro-Mechanical Website Structure

## Project Overview
Modern, responsive website for B&M electro-mechanical company featuring:
- Next.js 15 with React 19
- Tailwind CSS v4 for styling
- Framer Motion for animations
- GSAP for advanced animations
- Lenis for smooth scrolling
- React Icons for iconography

## Folder Structure
```
src/
├── app/
│   ├── layout.js          # Root layout with fonts and metadata
│   ├── page.js            # Homepage
│   ├── globals.css        # Global styles and design system
│   └── favicon.ico        # Company favicon
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.jsx     # Custom button component
│   │   ├── Card.jsx       # Service/project cards
│   │   ├── Modal.jsx      # Modal dialogs
│   │   └── Input.jsx      # Form inputs
│   ├── layout/            # Layout components
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Footer.jsx     # Site footer
│   │   └── Sidebar.jsx    # Mobile sidebar
│   ├── sections/          # Page sections
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Services.jsx   # Services showcase
│   │   ├── Projects.jsx   # Portfolio section
│   │   ├── About.jsx      # Company info
│   │   └── Contact.jsx    # Contact form
│   └── animations/        # Animation components
│       ├── ScrollReveal.jsx
│       ├── ParallaxBg.jsx
│       └── LoadingSpinner.jsx
├── lib/                   # Utility functions
│   ├── animations.js      # GSAP animations
│   ├── utils.js          # Helper functions
│   └── constants.js      # App constants
└── data/                 # Static data
    ├── services.js       # Services information
    ├── projects.js       # Portfolio projects
    └── company.js        # Company details
```

## Key Features Implemented

### Design System
✅ Custom color palette for electro-mechanical industry
✅ Typography with Inter, Poppins, and JetBrains Mono
✅ Responsive breakpoints and animations
✅ Glass morphism effects and gradients
✅ Accessibility features (focus states, contrast)

### Components
✅ Animated Button component with variants
✅ Responsive Header with glass morphism
✅ Mobile-first navigation
✅ Smooth scroll integration ready

### Next Steps
1. Create Hero section with animated background
2. Build Services section with hover effects
3. Develop Projects portfolio with filtering
4. Add About section with team showcase
5. Implement Contact form with validation
6. Add loading states and page transitions
7. Optimize for performance and SEO

## Animation Strategy
- **Scroll Animations**: Lenis + GSAP for smooth scrolling and reveals
- **Micro-interactions**: Framer Motion for buttons and cards
- **Page Transitions**: Route-based animations
- **Loading States**: Custom spinners and skeleton screens

## Performance Optimizations
- Next.js Image optimization
- Font display swap for faster loading
- Component lazy loading
- CSS-in-JS with Tailwind for minimal bundle size
- Service Worker for caching (future implementation)