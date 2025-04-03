import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Wrapper from "./components/Wrapper";
import LoginPage from "./components/LoginPage";
function App() {
  const[isLogin ,setIsLogin] = useState(true);
  return (
   <div>
    {isLogin ?<Wrapper /> : <LoginPage /> }
    
   </div>
  )
}

export default App;
