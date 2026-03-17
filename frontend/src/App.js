import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#111827" }}>
        <Link to="/" style={{ marginRight: "15px", color: "white" }}>Login</Link>
        <Link to="/signup" style={{ color: "white" }}>Signup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;