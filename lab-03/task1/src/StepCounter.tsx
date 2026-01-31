import { useState } from "react";
interface StepCounterProps {
    initialValue?: number; 
    step?: number;
}
const StepCounter = ({ initialValue = 0, step = 1}: StepCounterProps) => {
    const [ count, setCount] = useState(initialValue);
    const [ history, sethistory] = useState<number[]>([]);
    const [ operationCount, setoperationCount] = useState(0);
const handleUpdate = (type: 'inc' | 'dec') => {
    const newValue = type == 'inc' ? count + step : count - step;
    setCount(newValue);
    setoperationCount(prev => prev + 1);
    sethistory(prev => [...prev, newValue]);
};
const reset = () => {
    setCount(initialValue);
    sethistory([]);
    setoperationCount(0);
};
return(
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", margin: '12px' }}>
        <h2> Счетчик (Шаг: {step})</h2>
        <p>Текущее значение :{count}</p>
        <p>Всего: {operationCount}</p>
        <button onClick={() => handleUpdate('inc')}>Increment</button>
        <button onClick={() => handleUpdate('dec')}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <h4> Final 5:</h4>
        <ul>
            {history.slice(-5).map((val, i) => <li key={i}>{val}</li>)}
        </ul>
    </div>
)
};
export default StepCounter;