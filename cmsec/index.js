const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.send(`
    DB_PASSWORD: ${process.env.DB_PASSWORD}
    JWT_SECRET: ${process.env.JWT_SECRET}
  `);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
