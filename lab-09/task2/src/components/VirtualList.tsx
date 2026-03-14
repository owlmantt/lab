import React, { useState, useMemo } from "react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { generateItems } from "../utils/generateItems";

interface VirtualListProps {
  itemCount?: number;
  height?: number;
}

export function VirtualList({ itemCount = 10000, height = 500 }: VirtualListProps) {
  const [filter, setFilter] = useState("");

  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  const filteredItems = useMemo(() => {
    const term = filter.toLowerCase();
    return items.filter(item =>
      item.title.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
  }, [filter, items]);

  const Row = ({ index, style }: ListChildComponentProps) => {
    const item = filteredItems[index];
    
    if (!item) return null;

    return (
      <div style={{ 
        ...style, 
        borderBottom: "1px solid #eee", 
        padding: "10px",
        boxSizing: "border-box"
      }}>
        <strong>{item.title}</strong> <span style={{ color: "#666" }}>({item.category})</span>
        <p style={{ fontSize: "0.8rem", margin: "4px 0", color: "#333" }}>
          {item.description}
        </p>
      </div>
    );
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <input
        type="text"
        placeholder="Поиск..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ 
          marginBottom: "10px", 
          padding: "10px", 
          width: "100%", 
          boxSizing: "border-box",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      />
      <p style={{ fontWeight: "bold" }}>Показано {filteredItems.length} элементов</p>
      
      <div style={{ border: "1px solid #eee" }}>
        <List
          height={height}
          itemCount={filteredItems.length}
          itemSize={80}
          width="100%"
        >
          {Row}
        </List>
      </div>
    </div>
  );
}