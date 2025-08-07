import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const { username, password } = data;

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sucess === true) {
          const token = data.token;
          //vamos colocar no token no localStorage
          localStorage.setItem("token", token);
          navigate("/home");
          console.log(data);
        } else {
          alert("Usuario não encontrado!");
          console.log(data);
        }
      });
  };
  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 to-slate-600 text-white flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Auth with JWT</h1>
        <span className="text-sm text-gray-500">Faça login para continuar</span>
      </div>
      <div className="bg-slate-800 p-8 rounded flex w-[360px]">
        <form
          className="flex flex-col gap-8 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              placeholder="Insira o seu nome de usuário"
              className="w-full border p-2 rounded"
              {...register("username", {
                required: "O nome do usuário é obrigatório",
              })}
            />
            {formState.errors.username && (
              <span className="text-sm text-red-500">
                {formState.errors.username.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Insira a sua senha"
              className="w-full border p-2 rounded"
              {...register("password", { required: "A senha é obrigatória" })}
            />
            {formState.errors.password && (
              <span className="text-sm text-red-500">
                {formState.errors.password.message}
              </span>
            )}
          </div>
          <button
            className="bg-rose-700 p-2 rounded text-white cursor-pointer"
            type="submit"
          >
            Entrar
          </button>
          <div className="flex gap-2 items-center">
            <span className=" text-gray-500">Não possui uma conta?</span>
            <a href="/register" className="text-white text-sm">
              Cadastre-se
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
