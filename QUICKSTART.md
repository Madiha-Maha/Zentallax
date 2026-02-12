# ZENTALLAX - Quick Start Guide

## Getting Started

### Step 1: Install Dependencies
Open PowerShell and navigate to the ZENTALLAX folder:
```powershell
cd "c:\Users\Needa\OneDrive\Documents\ZENTALLAX"
npm install
```

### Step 2: Start the Backend Server
```powershell
npm start
```

You should see:
```
╔════════════════════════════════════════╗
║   ZENTALLAX Industrial Server Running  ║
║   Port: 3000                           ║
║   URL: http://localhost:3000           ║
╚════════════════════════════════════════╝
```

### Step 3: Open the Website
1. Open your browser and navigate to the project folder
2. Or use a local server like Live Server (VS Code extension)
3. You can also open: `file:///c:/Users/Needa/OneDrive/Documents/ZENTALLAX/index.html`

## Features Ready to Use

✅ **Homepage** - Beautiful hero section with animations
✅ **About Section** - Company statistics and information
✅ **Services** - 6 industrial solutions
✅ **Portfolio** - 6 featured projects
✅ **Team** - 4 team members with profiles
✅ **Testimonials** - 3 client reviews
✅ **Contact Form** - Fully functional with backend validation
✅ **Responsive Design** - Works on all devices
✅ **Smooth Animations** - Professional transitions

## API Endpoints

Test these in your browser:

- http://localhost:3000/api/health - Check server status
- http://localhost:3000/api/stats - Get statistics
- http://localhost:3000/api/services - Get services
- http://localhost:3000/api/projects - Get portfolio
- http://localhost:3000/api/team - Get team members
- http://localhost:3000/api/testimonials - Get testimonials

## Contact Form

1. Scroll to the Contact section
2. Fill in your details:
   - Name (required)
   - Email (required)
   - Phone (optional)
   - Company (optional)
   - Message (required)
3. Click "Send Message"
4. Backend will validate and store the message
5. You'll see a success modal

## Customize Content

### Change Company Name
Edit `index.html` and search for "ZENTALLAX" to replace with your company name

### Update Contact Info
Find the Contact section in `index.html`:
```html
<h3>Address</h3>
<p>123 Industrial Park, Tech City, TC 12345</p>

<h3>Phone</h3>
<p>+1 (555) 123-4567</p>

<h3>Email</h3>
<p>info@zentallax.com</p>
```

### Change Colors
Edit `style.css` root colors:
```css
:root {
    --primary: #00d4ff;        /* Blue accent */
    --accent: #ff006e;         /* Pink accent */
}
```

## Development Commands

### Start with Auto-Reload (optional)
Install nodemon first:
```powershell
npm install --save-dev nodemon
npm run dev
```

### View Database
The database data is stored in memory but you can add persistence by modifying `server.js`

## Troubleshooting

### Port 3000 Already in Use
Change the port in `.env`:
```
PORT=3001
```

### CORS Errors
The backend already has CORS enabled. If you see CORS errors:
- Check if backend is running
- Verify the API URL in `js/main.js`

### Contact Form Not Working
1. Ensure backend is running (`npm start`)
2. Check browser console (F12) for errors
3. Verify API URL is correct in `js/main.js`

### Styling Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)
- Check if style.css path is correct

## Next Steps

1. ✅ Replace placeholder content with your company info
2. ✅ Update the portfolio projects
3. ✅ Add your team members
4. ✅ Customize color scheme
5. ✅ Set up email notifications (optional)
6. ✅ Deploy to production

## Deployment

To deploy:
1. Set up Node.js hosting (Heroku, AWS, DigitalOcean, etc.)
2. Push code to git repository
3. Set up environment variables on hosting platform
4. Deploy backend
5. Deploy static files to CDN or hosting

## Support

For questions or issues:
- Check README.md for full documentation
- Review browser console for error messages
- Verify all dependencies are installed

---

Enjoy your professional industrial website! 🚀
