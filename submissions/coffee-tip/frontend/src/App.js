import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Dashboard from "./screens/Dashboard";
import './App.css'

import ProtectedRoute from "./auth/ProtectedRoute";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/"  element={<Home />} index />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<SignUp/>} />
          <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />
        </Routes>
    </Router>
  );
}

export default App;
