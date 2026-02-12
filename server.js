const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// SQLite Database Setup
const db = new sqlite3.Database(':memory:');

// Initialize Database
db.serialize(() => {
  // Contact Messages Table
  db.run(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      message TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Projects Table
  db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      category TEXT,
      image_url TEXT,
      status TEXT,
      completion_date TEXT
    )
  `);

  // Services Table
  db.run(`
    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      icon TEXT
    )
  `);

  // Team Table
  db.run(`
    CREATE TABLE IF NOT EXISTS team (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      position TEXT,
      bio TEXT,
      image_url TEXT,
      email TEXT
    )
  `);

  // Testimonials Table
  db.run(`
    CREATE TABLE IF NOT EXISTS testimonials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client_name TEXT NOT NULL,
      company TEXT,
      message TEXT,
      rating INTEGER,
      image_url TEXT
    )
  `);
});

// ============ ROUTES ============

// GET - All Contacts
app.get('/api/contacts', (req, res) => {
  db.all('SELECT * FROM contacts ORDER BY timestamp DESC', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// POST - Submit Contact Form
app.post('/api/contacts', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').notEmpty().withMessage('Message is required')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, company, message } = req.body;
  const stmt = db.prepare('INSERT INTO contacts (name, email, phone, company, message) VALUES (?, ?, ?, ?, ?)');
  stmt.run(name, email, phone, company, message, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ 
      id: this.lastID,
      message: 'Contact message received successfully!',
      name: name
    });
  });
  stmt.finalize();
});

// GET - All Projects
app.get('/api/projects', (req, res) => {
  db.all('SELECT * FROM projects', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// POST - Add Project
app.post('/api/projects', (req, res) => {
  const { title, description, category, image_url, status, completion_date } = req.body;
  const stmt = db.prepare('INSERT INTO projects (title, description, category, image_url, status, completion_date) VALUES (?, ?, ?, ?, ?, ?)');
  stmt.run(title, description, category, image_url, status, completion_date, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: this.lastID, message: 'Project added successfully!' });
  });
  stmt.finalize();
});

// GET - All Services
app.get('/api/services', (req, res) => {
  const defaultServices = [
    { id: 1, title: 'Industrial Automation', description: 'Advanced automation solutions for manufacturing', icon: '⚙️' },
    { id: 2, title: 'Process Control', description: 'Real-time monitoring and control systems', icon: '📊' },
    { id: 3, title: 'Quality Assurance', description: 'Comprehensive testing and certification', icon: '✓' },
    { id: 4, title: 'System Integration', description: 'Seamless integration with existing infrastructure', icon: '🔗' },
    { id: 5, title: 'Maintenance Services', description: '24/7 technical support and maintenance', icon: '🔧' },
    { id: 6, title: 'Consulting', description: 'Expert industry consultation and planning', icon: '💼' }
  ];
  res.json(defaultServices);
});

// GET - All Team Members
app.get('/api/team', (req, res) => {
  const defaultTeam = [
    { id: 1, name: 'John Anderson', position: 'CEO & Founder', bio: 'Industry veteran with 20+ years experience', image_url: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Sarah Mitchell', position: 'CTO', bio: 'Leading technology innovation and development', image_url: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Michael Chen', position: 'Operations Manager', bio: 'Optimizing process efficiency and quality', image_url: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Emma Wilson', position: 'Lead Engineer', bio: 'Designing next-generation industrial solutions', image_url: 'https://i.pravatar.cc/150?img=4' }
  ];
  res.json(defaultTeam);
});

// GET - All Testimonials
app.get('/api/testimonials', (req, res) => {
  const defaultTestimonials = [
    { id: 1, client_name: 'David Thompson', company: 'GlobalTech Industries', message: 'Exceptional service and innovative solutions. Truly transformed our operations.', rating: 5, image_url: 'https://i.pravatar.cc/150?img=5' },
    { id: 2, client_name: 'Lisa Romano', company: 'Premium Manufacturing', message: 'Professional team, reliable support, outstanding results. Highly recommended!', rating: 5, image_url: 'https://i.pravatar.cc/150?img=6' },
    { id: 3, client_name: 'Robert Kumar', company: 'Steel Works Co.', message: 'Increased efficiency by 40% within the first quarter. Excellent partnership.', rating: 5, image_url: 'https://i.pravatar.cc/150?img=7' }
  ];
  res.json(defaultTestimonials);
});

// GET - Statistics
app.get('/api/stats', (req, res) => {
  res.json({
    projects_completed: 150,
    happy_clients: 89,
    years_experience: 15,
    team_members: 45,
    countries_served: 32
  });
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║   ZENTALLAX Industrial Server Running  ║
║   Port: ${PORT}                           ║
║   URL: http://localhost:${PORT}            ║
╚════════════════════════════════════════╝
  `);
});
