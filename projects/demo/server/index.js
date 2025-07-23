import express from "express";
import cors from "cors";
import User from './model.js';
import sequelize from "./db.js";
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.get("/", async (_, res) => {
  const users = await User.findAll();
  return res.json({msg: "This is the list of all the users", allUsers: users});
});

app.post("/", async (req, res) => {
  const fullName = req.body.fullName;
  const result = await User.create({ fullName: fullName });
  return res.json({msg: "User Created Successfully", result});
})

try {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
  console.log('All models were synchronized successfully.');
  console.log('Connection has been established successfully.');
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.error('Unable to connect to the database:', error);
}