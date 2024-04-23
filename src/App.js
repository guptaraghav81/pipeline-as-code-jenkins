import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./Components/common/NavBar";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import OpenRoute from "./Components/Core/Auth/OpenRoute";
function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>

        <Route path="/login" element={
          <OpenRoute>
            <Login/>
          </OpenRoute>
        }></Route>

        <Route path="/signup" element={
          <OpenRoute>
            <Signup/>
          </OpenRoute>
        }></Route>
      </Routes>

    </div>
  );
}

export default App;
