import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import Signup from './Components/Singup_Login/singup';
import Login from "./Components/Singup_Login/login" // Corrected import and component name
import Todo from "./Components/Todo/todo"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} /> {/* Use element prop */}
        <Route path="/todo"  element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
