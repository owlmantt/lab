import { memo, useState, useCallback } from "react";
interface ButtonProps {
    label: string;
    onClick: () => void;
}
export const Button = memo(function Button({ onClick, label }: ButtonProps) {
  console.log(`Button "${label}" render`);
  return <button onClick={onClick}>{label}</button>;
});

export function ParentComponent() {
    const [count, setCount] = useState(0);
const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleIncrement} label="Increment (Optimized)" />
    </div>
  );
}