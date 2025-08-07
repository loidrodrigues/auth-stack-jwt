import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const handleAccount = () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3000/accounts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        setUser(user[0].username);
        navigate("/account");
      });
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 to-slate-600">
      <div className="w-full bg-white flex justify-between gap-10 p-4  px-8">
        <h1 className="text-2xl font-bold italic">SUMSINE</h1>
        <div>
          <ul className="flex gap-4 items-center">
            <li className="font-semibold">Home</li>
            <li className="font-semibold bg-slate-800 p-2 px-3 cursor-pointer text-white rounded">
              <button
                className="cursor-pointer font-light"
                onClick={handleAccount}
              >
                Account
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-full flex text-white justify-center items-center">
        <h1>Seu espaço de trabalho {user}</h1>
      </div>
    </div>
  );
}
