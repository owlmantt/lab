import React, { useMemo } from "react";
import { generateItems } from "../utils/generateItems";

interface RegularListProps {
  itemCount?: number;
}

export function RegularList({ itemCount = 10000 }: RegularListProps) {
  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  return (
    <div style={{ padding: "20px", border: "2px solid red", borderRadius: "8px" }}>
      <h2>Обычный список (Render ALL)</h2>
      <div style={{ height: "500px", overflowY: "auto", border: "1px solid #eee" }}>
        {items.map((item) => (
          <div key={item.id} style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
            <strong>{item.title}</strong>
            <p style={{ fontSize: "0.8rem", margin: "4px 0" }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}