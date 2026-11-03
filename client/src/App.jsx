import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Register from  "./Components/Auth/Register"

import { Routes , Route } from "react-router-dom"
import Login from "./Components/Admin/auth/Login";
function App() {
 
  return (
    <>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
