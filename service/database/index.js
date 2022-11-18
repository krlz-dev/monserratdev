const databaseConfig = {
  host: `${process.env.DATABASE_HOST}`,
  user: `${process.env.DATABASE_USER}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`
}

const createArticlesTableQuery = `
CREATE TABLE IF NOT EXISTS articles
(
    id         INT auto_increment PRIMARY KEY,
    title      VARCHAR(255) NOT NULL,
    content    TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

const executeQuery = (con, query) => {
  con.query(query, function (err, result) {
    if (err) throw err;
    console.log("Articles table created");
  });
}

module.exports = {
  databaseConfig,
  createArticlesTableQuery,
  executeQuery
}
