import express from "express";
import { modelUser } from "./modelUser.js";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", function (req, res) {
  res.send("hello world");
});

const createUserService = new CreateUserService();

app.get("/user", function (req, res) {
  const request = modelUser;
  console.log(request);
  //res.send(request);
  res.json({ mensage: request });
  //res.status(201).json({ error: error.message });
});

app.post("/createUser", async (req, res) => {
  try {
    const result = await createUserService.createUser(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  const user = await createUserService.getUser(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
