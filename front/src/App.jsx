import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 to-slate-600 text-white flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Auth with JWT</h1>
        <span className="text-sm text-gray-500">Faça login para continuar</span>
      </div>
      <div className="bg-slate-800 p-8 rounded flex w-1/4">
        <form className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-4">
            <label htmlFor="email">E-mail</label>
            <input
              placeholder="Insira o seu email"
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email">Password</label>
            <input
              placeholder="Insira a sua senha"
              className="w-full border p-2 rounded"
            />
          </div>
          <button className="bg-rose-700 p-2 rounded text-white">Entrar</button>
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

export default App;
