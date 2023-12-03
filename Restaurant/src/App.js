import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Manu from "./components/Manu";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Review from "./components/Review";
import Map from "./components/Map";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Deco">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route peth="/manu" elsemt={<Manu />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/manu" element={<Manu />}></Route>
            <Route path="/review" element={<Review />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>

            <Route
              path="/map"
              element={
                <Map coordinates={{ latitude: 40.7128, longitude: -74.006 }} />
              }
            ></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
