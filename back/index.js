import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

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

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    const token = jwt.sign({ email: user.email }, "PRIVATE_KEY");
    res.json({ sucess: true, token: token });
  } else {
    res.json({ sucess: false, message: "Usuário não autenticado!" });
  }
});

app.listen("3000", () => console.log("Backend rodando na porta 3000!"));
