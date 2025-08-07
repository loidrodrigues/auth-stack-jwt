import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import { authmiddleware } from "./middlewares/authmiddleware.js";

const app = express();
app.use(cors());
app.use(express.json());

const accounts = [
  {
    accountType: "chekin",
    balance: 1500,
    username: "thiago",
  },
  {
    accountType: "saving",
    balance: 5000,
    username: "thiago",
  },
  {
    accountType: "chekin",
    balance: 8000,
    username: "sandro",
  },
];

global.users = [
  {
    username: "thiago",
    password: "123456",
  },
  {
    username: "sandro",
    password: "1234567",
  },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    const token = jwt.sign({ username: user.username }, "PRIVATE_KEY");
    res.json({ sucess: true, token: token });
  } else {
    res.json({ sucess: false, message: "Usuário não autenticado!" });
  }
});

// verificacao de token
app.get("/accounts", authmiddleware, (req, res) => {
  const username = req.user.username;
  const userAccouts = accounts.filter(
    (account) => account.username === username
  );
  res.json(userAccouts);
});

app.listen("3000", () => console.log("Backend rodando na porta 3000!"));
