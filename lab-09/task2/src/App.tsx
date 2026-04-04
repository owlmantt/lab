import React, { useState } from "react";
import { VirtualList } from "./components/VirtualList";
import { RegularList } from "./components/RegularList";

function App() {
  const [showVirtual, setShowVirtual] = useState(true);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Lab 9.2: Virtualization Test</h1>
      
      <button 
        onClick={() => setShowVirtual(!showVirtual)}
        style={{ padding: "10px 20px", marginBottom: "20px", cursor: "pointer" }}
      >
        Переключить на {showVirtual ? "Обычный" : "Виртуальный"} список
      </button>

      {showVirtual ? (
        <VirtualList itemCount={10000} />
      ) : (
        <RegularList itemCount={10000} />
      )}
    </div>
  );
}

export default App;