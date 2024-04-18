import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./pages/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/home" element={<ProtectedRoute><HomePage/></ProtectedRoute>}></Route>
      </Routes>
    </>
  );
}

export default App;
