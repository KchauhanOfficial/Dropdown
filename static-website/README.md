# Tycoon Elevators - Static Website

A premium, fully responsive static website for Tycoon Elevators built with pure HTML, CSS, and JavaScript - no frameworks, no dependencies, no build process required.

## 📁 Files

- `index.html` - Main HTML file with all content
- `style.css` - Complete styling and animations
- `script.js` - Vanilla JavaScript for interactivity

## 🚀 How to Use

### Method 1: Direct Open
Simply open `index.html` in any modern web browser. That's it!

### Method 2: Local Server (Recommended)
For better performance and to avoid any CORS issues with external images:

```bash
# Using Python 3
cd static-website
python3 -m http.server 8080

# Using PHP
php -S localhost:8080

# Using Node.js (if you have http-server installed)
npx http-server -p 8080
```

Then visit: `http://localhost:8080`

## ✨ Features

### 📱 Fully Responsive
- Mobile-first design
- Responsive breakpoints at 768px and 480px
- Touch-friendly navigation

### 🎨 Premium Design
- Gold accent theme (#D4AF37)
- Poppins font family
- Professional animations
- Smooth transitions

### 🎯 Sections Included
1. **Hero Section** - Full-screen with animated background
2. **Elevator Types** - 4 elevator categories with images
3. **Core Services** - Installation, Modernisation, Repair, Maintenance
4. **Why Choose Us** - 6 key benefits
5. **Industries** - 4 sectors served
6. **Work Process** - 4-step workflow
7. **Project Gallery** - 9 images with filter & lightbox
8. **Testimonials** - 4 client reviews
9. **About** - Company information with stats
10. **CTA Section** - Strong conversion section
11. **Contact Form** - With validation
12. **Footer** - Complete with social links

### 🔧 Interactive Features
- Mobile hamburger menu
- Smooth scroll navigation
- Gallery filters (All, Commercial, Residential)
- Lightbox image viewer
- Form validation
- Toast notifications
- Scroll animations
- Hover effects

### 📞 Contact Integration
- Click-to-call: `tel:9015108775`
- WhatsApp: Pre-filled message
- Email: `info@tycoonelevators.com`
- Location: Delhi 110094, India

## 🎭 JavaScript Functionality

### Menu Toggle
```javascript
// Hamburger menu for mobile
menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});
```

### Gallery Filter
```javascript
// Filter gallery by category
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        // Filter logic
    });
});
```

### Lightbox
```javascript
// Click gallery item to open lightbox
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        lightbox.style.display = 'flex';
    });
});
```

### Form Validation
```javascript
// Contact form with validation
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Validation and submission logic
});
```

## 🎨 Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
  --gold: #D4AF37;          /* Primary accent color */
  --gold-light: #F4E4B0;    /* Light gold */
  --gold-dark: #B8941F;     /* Dark gold */
  --dark: #1a1a1a;          /* Dark color */
  --white: #ffffff;         /* White */
}
```

### Update Contact Information
In `index.html`, find and replace:
- Phone: `9015108775`
- Email: `info@tycoonelevators.com`
- Location: `Delhi 110094, India`
- WhatsApp: `919015108775`

### Modify Logo
Replace the logo URL in both header and footer:
```html
<img src="YOUR_LOGO_URL" alt="Tycoon Elevators Logo">
```

### Add/Remove Sections
Simply edit the HTML structure in `index.html`. Each section is clearly commented.

## 📊 Performance

- **No dependencies** - Pure vanilla code
- **Lightweight** - Minimal CSS/JS
- **Fast loading** - Optimized assets
- **SEO friendly** - Semantic HTML
- **Accessible** - ARIA labels included

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📱 Mobile Features

- Responsive images
- Touch-friendly buttons
- Mobile navigation menu
- Optimized typography
- Fast tap interactions

## 🔐 Form Handling

The contact form currently shows a success message without backend submission. To connect it to a backend:

### Option 1: FormSpree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: Google Sheets
Use a service like SheetDB or Google Apps Script

### Option 3: Custom Backend
Connect to your own API endpoint by modifying the form submission in `script.js`

## 📦 Deployment

### GitHub Pages
1. Create a repository
2. Upload files
3. Go to Settings > Pages
4. Select main branch
5. Done! Your site is live

### Netlify
1. Drag and drop the folder to Netlify
2. Instant deployment

### Vercel
```bash
npx vercel --prod
```

### Traditional Hosting
Upload files via FTP to your web server

## 🎯 SEO Tips

1. Add meta description (already included)
2. Include Open Graph tags
3. Add schema markup for local business
4. Optimize images (consider WebP format)
5. Add sitemap.xml
6. Create robots.txt

## 📝 License

Free to use for Tycoon Elevators business purposes.

## 📧 Support

For any questions or customization needs, contact the development team.

## 🎉 Features Highlights

✅ No build process required
✅ No node_modules or dependencies
✅ Works offline (after first load)
✅ Easy to customize
✅ Production ready
✅ Cross-browser compatible
✅ Accessible design
✅ SEO optimized
✅ Fast performance
✅ Mobile responsive

---

**Built with ❤️ for Tycoon Elevators**
