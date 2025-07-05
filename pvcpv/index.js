const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 3000;

const filePath = path.join(__dirname, 'data', 'data.txt');

app.get('/', (_, res) => {
  const content = `Hello at ${new Date().toISOString()}\n`;
  fs.appendFileSync(filePath, content);
  res.send("Data written to volume!");
});

app.listen(3000, ()=>{
  console.log(`Server is running on PORT : ${PORT}`)
})