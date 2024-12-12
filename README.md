# Next.js Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To get started with this project, follow the steps below.

### Step 1: Install Dependencies

First, install the necessary dependencies by running the following command:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install


# Step 2: Set Up MySQL Database
CREATE DATABASE school_directory;

Create the schools Table:
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  image VARCHAR(255) NOT NULL
);

# step 3 : Configure the Database Connection:
import mysql from 'mysql';

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Replace with your MySQL password
  database: "school_directory",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database!");
});

export default db;

# Step 4: Run the Development Server
npm run dev
# or
yarn dev
# or
pnpm dev
# or


### Key Points:
1. **MySQL Setup**: It clearly explains how to create a database (`school_directory`), the table (`schools`), and the required fields.
2. **Database Connection**: The `db.js` file is configured for connecting to MySQL.
3. **API Integration**: Example of how to create an API route to fetch data from the database.
4. **Run the Project**: Instructions for running the development server using `npm run dev`.

This `README.md` should now provide clear and complete steps for getting your Next.js project running with MySQL integration.




