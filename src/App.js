import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import About from "./About";
import Admin from "./Admin";
import AdminPage from "./AdminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/adminpage" element={<AdminPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/fp" element={<ForgotPassword />} />
                    <Route path="/cp" element={<ChangePassword />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
