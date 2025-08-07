import jwt from "jsonwebtoken";

export const authmiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      const decode = jwt.verify(token, "PRIVATE_KEY");
      if (decode) {
        const username = decode.username;
        const persistentUser = users.find((user) => user.username === username);
        if (persistentUser) {
          req.user = persistentUser;
          next();
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
};
