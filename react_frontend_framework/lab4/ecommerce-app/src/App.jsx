import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
