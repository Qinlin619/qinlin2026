# Qinlin Liu - Portfolio Website

A minimal, clean personal portfolio website built with React and React Router.

## Features

- **Minimal Design**: Clean, academic aesthetic with ample white space
- **Fixed Navigation**: Sticky navbar with smooth navigation
- **Work Showcase**: Grid layout displaying 6 project cards
- **Multiple Pages**: Work, Research, Side Projects, About, and CV pages
- **Responsive**: Mobile-friendly design
- **React Router**: Multi-page navigation with React Router

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment to GitHub Pages

1. Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json` scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Update `homepage` in `package.json`:
```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

4. Deploy:
```bash
npm run deploy
```

## Project Structure

```
qinlin-portfolio/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.js      # Fixed navigation bar
│   │   ├── Hero.js        # Homepage hero section
│   │   ├── WorkGrid.js    # Work projects grid container
│   │   ├── WorkCard.js    # Individual project card
│   │   └── Footer.js      # Footer component
│   ├── pages/             # Page components
│   │   ├── WorkDetail.js  # Individual work detail page
│   │   ├── Research.js    # Research page
│   │   ├── Side.js        # Side projects page
│   │   ├── About.js       # About page
│   │   └── CV.js          # CV page
│   ├── App.js             # Main app component with routing
│   ├── App.css            # Global styles
│   └── index.js           # React entry point
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Customization

- Replace placeholder text in components with your actual content
- Update project data in `src/components/WorkGrid.js`
- Modify styles in `src/App.css` to match your preferences
- Add images by placing them in `public/` and referencing them

## License

This project is open source and available for personal use.
