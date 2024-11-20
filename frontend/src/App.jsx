import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";


function App() {

  return (
   <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}  />
      <Route path="/signup" element={<SignUpPage />}  />
      <Route path="/login" element={<LoginPage />}  />
    </Routes>
   </div>
  );
}

export default App;
