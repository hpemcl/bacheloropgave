const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Til POST-forespørgsler

// Opret forbindelse til din database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Min adgangskode til MySQL
  database: 'bachelor_db', // min database til react med wp som headless cms
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

// API-endpoint til at hente temagroups og deres kontakter
app.get('/temagroups', (req, res) => {
    const query = `
      SELECT g.id as group_id, g.title, g.est, g.description, g.image_url,
             c.name, c.company, c.email
      FROM temagroups g
      LEFT JOIN contacts c ON g.id = c.group_id
    `;
    db.query(query, (err, results) => {
      if (err) return res.status(500).json({ error: err });
  
      const groups = {};
      results.forEach((row) => {
        if (!groups[row.group_id]) {
          groups[row.group_id] = {
            id: row.group_id,
            title: row.title,
            est: row.est,
            description: row.description,
            image_url: row.image_url, // Tilføj billed-URL til gruppen
            contacts: [],
          };
        }
        if (row.name) {
          groups[row.group_id].contacts.push({
            name: row.name,
            company: row.company,
            email: row.email,
          });
        }
      });
  
      res.json(Object.values(groups));
    });
  });
  

// Start serveren
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
