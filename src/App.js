import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./Components/common/NavBar";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import OpenRoute from "./Components/Core/Auth/OpenRoute";
import Error from "./pages/Error";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/error" element={<Error/>}></Route>
        <Route path="login" element={
          <OpenRoute>
            <Login/>
          </OpenRoute>
        }></Route>

        <Route path="signup" element={
          <OpenRoute>
            <Signup/>
          </OpenRoute>
        }></Route>

        <Route path="forgot-password" element={
          <OpenRoute>
            <ForgotPassword/>
          </OpenRoute>
        }></Route>
          <Route path="update-password/:id" element={
          <OpenRoute>
            <UpdatePassword/>
          </OpenRoute>
        }></Route>

       <Route path="verify-email" element={
          <OpenRoute>
            <VerifyEmail/>
          </OpenRoute>
        }></Route>

        <Route path="about" element={
            <About/>
        }></Route>

        <Route path="/contact" element={<Contact/>} />

      </Routes>

    </div>
  );
}

export default App;
