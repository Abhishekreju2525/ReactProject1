import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./pages/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/home" element={<ProtectedRoute><HomePage/></ProtectedRoute>}></Route>
        <Route path="/edit/:id" element={<ProtectedRoute><EditPage/></ProtectedRoute>}></Route>
      </Routes>
    </>
  );
}

export default App;
