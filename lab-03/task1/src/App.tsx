
import StepCounter from './StepCounter';

function App() {
  return (
    <div>
      <h1>Lab 3.1: Component Composition</h1>
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
    </div>
  );
}
export default App;
