const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (_, res) => {
  res.send(`
        database url : ${process.env.DATABASE_URL}
        Secret variable : ${process.env.SECRET_VARIABLE}
        jwt secret : ${process.env.JWT_SECRET}`);
});

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});
