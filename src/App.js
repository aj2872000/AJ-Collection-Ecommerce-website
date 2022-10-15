import "bootstrap"
import "./App.css";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./component/Cart";
import About from "./component/About";
import ContactUs from "./component/ContactUs";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          {/* this is known as dynamic routing */}
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/contact" element={<ContactUs/>}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
