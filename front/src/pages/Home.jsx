export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 to-slate-600">
      <div className="w-full bg-white flex justify-between gap-10 p-4  px-8">
        <h1 className="text-2xl font-bold italic">SUMSINE</h1>
        <div>
          <ul className="flex gap-4">
            <li className="font-semibold">Home</li>
            <li className="font-semibold">Account</li>
          </ul>
        </div>
      </div>
      <div className="h-full flex text-white justify-center items-center">
        <h1>Seu espaço de trabalho</h1>
      </div>
    </div>
  );
}
