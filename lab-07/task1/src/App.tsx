import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import "./App.css";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  return (
    <div>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc", background: "#f9f9f9" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Dashboard</Link>
        <Link to="/settings" style={{ marginRight: "10px" }}>Settings</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <main style={{ padding: "20px" }}>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
  