import mysql from 'mysql2';
import multer from 'multer';
import path from 'path';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // Change this to your MySQL password
  database: 'school_directory',
});

db.connect();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/schoolImages');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Store with timestamp to avoid duplicate names
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req, res) => {
  if (req.method === 'POST') {
    upload.single('image')(req, res, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Image upload failed' });
      }

      const { name, address, city, state, contact, email_id } = req.body;
      const imagePath = `/schoolImages/${req.file.filename}`;

      db.query(
        'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, address, city, state, contact, imagePath, email_id],
        (err, result) => {
          if (err) {
            return res.status(500).json({ error: 'Database error' });
          }
          res.status(200).json({ message: 'School added successfully' });
        }
      );
    });
  }
};
