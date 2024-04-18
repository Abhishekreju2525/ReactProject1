import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./pages/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="/home" element={<ProtectedRoute><HomePage/></ProtectedRoute>}></Route>
      </Routes>
    </>
  );
}

export default App;
