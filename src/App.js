import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Valparai from "./components/Valparai";
import Parks from "./components/Parks";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import Temples from "./components/Temples";
import Malls from "./components/Malls";
import Amusementpark from "./components/Amusementpark";
import Falls from "./components/Falls";
import Main from "./components/Main";
import Login from "./components/Login";
import NavbarMain from "./components/NavbarMain";
import Footer from "./components/Footer";
import CityMaster from "./components/CityMaster";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarMain />
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/first" element={<Main />}></Route>
          <Route path="/temple" element={<Temples />}></Route>
          <Route path="/mall" element={<Malls />}></Route>
          <Route path="/water" element={<Falls />}></Route>
          <Route path="/park" element={<Parks />}></Route>
          <Route path="/Amuse" element={<Amusementpark />}></Route>
          <Route path="/moun" element={<Valparai />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/CityMaster" element={<CityMaster />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
