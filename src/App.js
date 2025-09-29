import React, { useState } from "react";
import Hello from "./Hello";

function App() {
  const [count, setCount] = useState(0);   
  const [name, setName] = useState("");    
  const [greeting, setGreeting] = useState(""); 

  const handleSubmit = (e) => {
    setGreeting(`Xin chào, ${name}!`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Demo ReactJS</h1>

      <Hello name="Huy" />
      <Hello name="Lan" />

      <h2>Bộ đếm: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={() => setCount(count - 1)}>Giảm</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      <h2>Nhập tên để được chào</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập tên của bạn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Chào</button>
      </form>

      {greeting && <h3>{greeting}</h3>}
    </div>
  );
}

export default App;
