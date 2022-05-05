import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./Pages/AddItem/AddItem";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import Items from "./Pages/Home/Items/Items";
import ManageItems from "./Pages/ManageItems/ManageItems";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/manage" element={<ManageItems></ManageItems>}></Route>
        <Route path="/addItem" element={<AddItem></AddItem>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
