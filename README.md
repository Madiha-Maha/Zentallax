# ZENTALLAX - Industrial Solutions Platform

## Project Overview
ZENTALLAX is a fully functional industrial website with a modern frontend and complete backend infrastructure. It showcases industrial solutions, services, portfolio, team, and client testimonials.

## Features

### Frontend
✨ **Modern Design**: Glassmorphism UI with gradient accents
🎨 **Responsive**: Fully responsive design for all devices
⚡ **Interactive**: Smooth animations and transitions
📱 **Mobile-First**: Optimized for mobile and desktop
🎯 **SEO Ready**: Semantic HTML structure
♿ **Accessible**: WCAG compliant design

### Backend
🚀 **Express.js Server**: Robust API endpoints
📦 **SQLite Database**: In-memory data storage
✅ **Form Validation**: Complete input validation
📧 **Contact Management**: Collect and store contact inquiries
📊 **Data APIs**: Endpoints for services, portfolio, team, testimonials

## Project Structure
```
ZENTALLAX/
├── index.html              # Main HTML file
├── style.css               # Global styles
├── server.js               # Express.js backend
├── package.json            # Dependencies
├── js/
│   ├── main.js            # Main functionality & API calls
│   └── animations.js      # Advanced animations
└── README.md              # Documentation
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup
1. Navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`

### Frontend
1. Open `index.html` in your browser or serve using a local server
2. The frontend will automatically connect to the backend API

## API Endpoints

### Statistics
- **GET** `/api/stats` - Get platform statistics

### Contacts
- **GET** `/api/contacts` - Get all contact messages
- **POST** `/api/contacts` - Submit a contact form
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string",
    "company": "string",
    "message": "string"
  }
  ```

### Projects/Portfolio
- **GET** `/api/projects` - Get all projects
- **POST** `/api/projects` - Add a new project

### Services
- **GET** `/api/services` - Get all services

### Team
- **GET** `/api/team` - Get team members

### Testimonials
- **GET** `/api/testimonials` - Get client testimonials

### Health Check
- **GET** `/api/health` - Server status check

## Sections

### Home
- Hero banner with call-to-action buttons
- Eye-catching animations and parallax effects
- Company statistics display

### About
- Company overview
- Key statistics with hover effects
- Mission statement

### Services
- 6 core industrial services
- Service cards with hover animations
- Icons and descriptions

### Portfolio
- Featured industrial projects
- Project categories and status
- Image placeholders with icons

### Team
- Professional team members
- Team member profiles with avatars
- Social media links

### Testimonials
- Client reviews and ratings
- Company information
- Star ratings

### Contact
- Contact form with validation
- Business information
- Success confirmation modal

## Technologies Used

### Frontend
- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts

### Backend
- Node.js
- Express.js
- SQLite3
- Body-parser
- CORS
- Express-validator

## Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --primary: #00d4ff;        /* Main accent color */
    --accent: #ff006e;         /* Secondary accent */
    --bg-dark: #0f0f1e;        /* Dark background */
}
```

### Add Services
Edit the default services in `js/main.js` or add a database entry via the API.

### Modify Content
- Edit company information in `index.html`
- Update team members in the Team section
- Add new portfolio projects

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance
- Optimized animations (60fps)
- Lazy loading for images
- Minimal CSS/JS bundle
- Efficient API calls

## Future Enhancements
- Database persistence (MySQL/PostgreSQL)
- Admin dashboard
- Email notifications
- Multi-language support
- Blog/News section
- Client portal
- Payment integration

## Troubleshooting

### Backend not connecting
- Ensure Node.js and npm are installed
- Check if port 3000 is available
- Verify `npm install` completed successfully

### Styling issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check if style.css is properly linked
- Verify font imports are working

### Forms not submitting
- Ensure backend server is running
- Check browser console for errors
- Verify network connectivity

## Support & Contact
For inquiries: info@zentallax.com
Phone: +1 (555) 123-4567

## License
© 2026 ZENTALLAX. All Rights Reserved.

---

**Ready to transform your industrial operations with ZENTALLAX!**
