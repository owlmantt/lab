import ProfileCard from "./ProfileCard";
import Greeting from "./Greeting";
import './App.css';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: '20px', 
      padding: '40px' 
    }}>
      <Greeting />
      <ProfileCard />
    </div>
  );
}
export default App;