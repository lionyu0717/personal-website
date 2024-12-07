# Personal Website

## Overview
This is a modern, responsive personal website template designed to showcase your professional profile.

## Features
- Responsive design
- Smooth scrolling navigation
- Modern, clean UI
- Easily customizable sections

## Customization Steps
1. Replace profile image
   - Update `profile.jpg` in the root directory
   - Recommended size: 300x300 pixels

2. Edit Personal Information
   - Open `index.html`
   - Replace placeholder text with your details:
     * Name
     * Tagline
     * About Me section
     * Experience details
     * Project descriptions
     * Contact information

3. Customize Styling
   - Modify color scheme in `styles.css`
   - Adjust `:root` variables to match your preference

## Color Customization
Easily change the color scheme by updating CSS variables:
```css
:root {
    --primary-color: #3498db;   /* Main accent color */
    --secondary-color: #2ecc71; /* Secondary accent color */
    --background-color: #f4f6f7;/* Background color */
    --text-color: #2c3e50;      /* Main text color */
}
```

## Local Development
Simply open `index.html` in your web browser to view the website.

## Deployment
This website is deployed using GitHub Pages. To deploy your own version:

1. Create a new repository on GitHub
2. Push your code to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/personal-website.git
git push -u origin main
```

3. Go to repository Settings > Pages
4. Select "main" branch as source
5. Save the settings and wait for deployment

Your site will be available at: `https://yourusername.github.io/personal-website/`

## Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Inter)

## License
MIT License
