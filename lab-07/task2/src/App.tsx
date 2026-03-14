import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary"; // Task 1 & 2
import "./App.css";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function ErrorFallback() {
  return (
    <div style={{ textAlign: "center", color: "red" }}>
      <h3>Something went wrong</h3>
      <button onClick={() => window.location.reload()}>Reload Page</button>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Dashboard</Link> | <Link to="/settings">Settings</Link> | <Link to="/profile">Profile</Link>
      </nav>

      <main style={{ padding: "20px" }}>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<div>Loading page...</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
}

export default App;