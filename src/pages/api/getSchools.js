import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Change this to your MySQL password
  database: "school_directory",
});

db.connect();

export default (req, res) => {
  if (req.method === "GET") {
    db.query(
      "SELECT id, name, address, city, image FROM schools",
      (err, results) => {
        if (err) {
          return res.status(500).json({ error: "Database error" });
        }
        res.status(200).json(results);
      }
    );
  }
};
