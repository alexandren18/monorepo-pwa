// apps/web/src/App.jsx
import { useState } from "react";
import { getHello } from "./api";

function App() {
  const [msg, setMsg] = useState("");

  async function handleClick() {
    const data = await getHello();
    setMsg(data.msg);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Bootcamp PWA</h1>

      <button onClick={handleClick}>
        Chamar API
      </button>

      <p>Resposta da API: {msg}</p>
    </div>
  );
}

export default App;
