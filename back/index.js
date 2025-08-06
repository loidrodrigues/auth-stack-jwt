import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

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
const users = [
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
app.get("/accounts", (req, res) => {
  // pegando o token do header
  const authHeader = req.headers.authorization;
  if (authHeader) {
    // separando o token do bearer
    const token = authHeader.split(" ")[1];

    try {
      // decodificando o token
      const decod = jwt.verify(token, "PRIVATE_KEY");
      if (decod) {
        const username = decod.username;
        const persistUser = users.find((user) => user.username === username);
        if (persistUser) {
          const userAccount = accounts.filter(
            (users) => users.username === persistUser.username
          );
          res.json(userAccount);
        } else {
          res.json({ sucess: false, message: "usuario nao encontrado!" });
        }
      } else {
        res.json({
          sucess: false,
          message: "falha na decodificacao do token!",
        });
      }
    } catch (error) {
      res.json({ sucess: false, message: "o token foi mudado!" });
    }
  } else {
    res
      .status(401)
      .json({ sucess: false, message: "sem o header de autenticacao" });
  }
});

app.listen("3000", () => console.log("Backend rodando na porta 3000!"));
