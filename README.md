# Gannon Rutty - Professional Portfolio Website

A modern, responsive React portfolio website built with Vite, featuring smooth animations, accessibility-first design, and a clean component architecture.

## 🚀 Features

- **Modern React Architecture**: Built with React 18+ and functional components
- **Component-Based Structure**: Organized, reusable components
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Accessibility First**: ARIA labels, semantic HTML, keyboard navigation
- **Responsive Design**: Mobile-first approach with modern CSS
- **Performance Optimized**: Preloads, optimized assets, and efficient rendering
- **SEO Ready**: Meta tags, structured data, and proper semantic markup
- **Modern Styling**: CSS custom properties, gradients, and glassmorphism effects

## 🛠️ Tech Stack

- **React 18+** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom properties, animations, and modern layouts
- **Intersection Observer API** - Scroll animations
- **Semantic HTML** - Accessibility and SEO

## 📁 Project Structure

```
Website/
├── public/
│   └── GR.png                 # Brand logo
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigation header with scroll effects
│   │   ├── Hero.jsx           # Main hero section
│   │   ├── Projects.jsx       # Projects showcase section
│   │   ├── Contact.jsx        # Contact information
│   │   ├── Footer.jsx         # Site footer
│   │   └── TicTacToe.jsx      # Interactive game component
│   ├── hooks/
│   │   └── useScrollAnimation.js # Custom hook for scroll animations
│   ├── App.jsx                # Main app component
│   └── main.jsx              # App entry point
├── styles/
│   └── main.css              # Main stylesheet with CSS variables
├── index.html                # HTML entry point with meta tags
├── package.json              # Dependencies and scripts
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## 🎨 Design Features

- **Glassmorphism Effects**: Frosted glass navigation and buttons
- **Gradient Text**: Modern gradient text effects on headings
- **Smooth Transitions**: CSS transitions and animations throughout
- **Dark Theme**: Professional dark color scheme
- **Interactive Elements**: Hover effects and micro-interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x or higher
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📱 Responsive Design

The site is fully responsive with breakpoints for:
- **Mobile**: 480px and below
- **Tablet**: 481px - 768px
- **Desktop**: 769px and above

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly
- High contrast ratios
- Reduced motion support

## 🎯 Performance

- Optimized images and assets
- CSS and JS minification
- Efficient component rendering
- Preload critical resources
- Lazy loading for non-critical content

## 🔧 Customization

### Colors
Update the CSS custom properties in `styles/main.css`:
```css
:root {
  --color-primary: #0a83c6;
  --color-bg: #0a0e1a;
  --color-text: linen;
  /* ... more variables */
}
```

### Content
Edit the component files in `src/components/` to update:
- Personal information
- Project descriptions
- Contact details
- Navigation links

### Styling
Modify `styles/main.css` to customize:
- Colors and themes
- Typography
- Layout and spacing
- Animations and transitions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The project builds to a standard `dist` folder that can be deployed to any static hosting service.

## 📄 License

© 2024 Gannon Rutty. All rights reserved.

## 🤝 Contributing

This is a personal portfolio site, but suggestions and improvements are welcome!

## 📞 Support

For questions or support, reach out via:
- **LinkedIn**: [Gannon Rutty](https://www.linkedin.com/in/gannon-rutty/)
- **Email**: hello@gannonrutty.com
