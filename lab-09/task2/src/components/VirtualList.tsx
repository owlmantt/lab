import React, { useState, useMemo } from "react";

import * as RW from "react-window"; 
import { generateItems } from "../utils/generateItems";

interface VirtualListProps {
  itemCount?: number;
  height?: number;
}

export function VirtualList({ itemCount = 10000, height = 500 }: VirtualListProps) {
  const [filter, setFilter] = useState("");


  const List = (RW as any).FixedSizeList || (RW as any).default?.FixedSizeList;

  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  const filteredItems = useMemo(() => {
    const term = filter.toLowerCase();
    return items.filter(item =>
      item.title.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term)
    );
  }, [filter, items]);

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
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
        <p style={{ fontSize: "0.8rem", margin: "4px 0" }}>{item.description}</p>
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
        style={{ width: "100%", padding: "10px", marginBottom: "10px", boxSizing: "border-box" }}
      />
      
      <div style={{ border: "1px solid #eee" }}>
        {List ? (
          <List
            height={height}
            itemCount={filteredItems.length}
            itemSize={80}
            width="100%"
          >
            {Row}
          </List>
        ) : (
          <div style={{ color: "red" }}>Ошибка: Библиотека react-window не загружена.</div>
        )}
      </div>
    </div>
  );
}