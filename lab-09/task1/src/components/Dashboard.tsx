import { useState, useCallback } from "react"; 
import { UserCard, UserCardWithCompare } from "./UserCard";
import { AnalyticsChart } from "./AnalyticsChart";
import { Button } from "./Button"; 
export function Dashboard() {
  const [count, setCount] = useState(0);
  const [items] = useState(["Apple", "Banana", "Cherry"]);
  

  const [user] = useState({ 
    id: 1, 
    name: "John Doe", 
    email: "john@example.com" 
  });

  
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Performance Dashboard</h1>
      <p>Global State Count: **{count}**</p>
      
      
      <Button onClick={increment} label="Add to Count" />
      
      <hr style={{ margin: '20px 0' }} />
      
      <section>
        <h2>Task 2: React.memo</h2>
        <UserCard user={user} />
        <UserCardWithCompare user={user} />
      </section>

      <section>
        <h2>Task 3: useMemo</h2>
        <AnalyticsChart items={items} />
      </section>
    </div>
  );
}