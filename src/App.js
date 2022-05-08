import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateAccount from "./Components/Pages/CreateAccount/CreateAccount";
import Navbar from "./Components/Pages/Shared/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import ManageItems from "./Components/Pages/ManageItems/ManageItems";
import Myitems from "./Components/Pages/MyItems/Myitems";
import Login from "./Components/Pages/Login/Login";
import Footer from "./Components/Pages/Shared/Footer/Footer";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import AddItems from "./Components/Pages/ManageItems/AddItems/AddItems";
import Blogs from "./Components/Pages/Blogs/Blogs";
import UpdateItem from "./Components/Pages/UpdateItem/UpdateItem";
import Page404 from "./Components/Pages/Page404/Page404";

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
            element={
              <RequireAuth>
                <ManageItems></ManageItems>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/AddItems"
            element={
              <RequireAuth>
                <AddItems></AddItems>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/MyItems"
            element={
              <RequireAuth>
                <Myitems></Myitems>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/Blogs"
            element={
              <RequireAuth>
                <Blogs></Blogs>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/ManageItems/:productID"
            element={
              <RequireAuth>
                <UpdateItem></UpdateItem>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/CreateAccount"
            element={<CreateAccount></CreateAccount>}
          ></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
