import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAccount from "./Components/Pages/CreateAccount/CreateAccount";
import Navbar from "./Components/Pages/Shared/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import ManageItems from "./Components/Pages/ManageItems/ManageItems";
import Myitems from "./Components/Pages/MyItems/Myitems";
import Login from "./Components/Pages/Login/Login";
import Footer from "./Components/Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="container-lg">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
          <Route
            path="/ManageItems"
            element={<ManageItems></ManageItems>}
          ></Route>
          <Route path="/MyItems" element={<Myitems></Myitems>}></Route>
          <Route
            path="/CreateAccount"
            element={<CreateAccount></CreateAccount>}
          ></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
