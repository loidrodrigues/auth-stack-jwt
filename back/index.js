import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  {
    email: "thiago@thiago",
    password: "123456",
  },
  {
    email: "sandro@sandro",
    password: "1234567",
  },
];

app.post("/login", () => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    // aqui vamos o token com JWT
  } else {
    // aqui respondemos que o usuario nao foi autenticado
  }
});

app.listen("3000", () => console.log("Backend rodando na porta 3000!"));
