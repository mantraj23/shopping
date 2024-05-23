import "./App.css";
import Footer from "./components/footer";
import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductView from "./components/productview";
import CartPage from "./components/cart/cartpage";
import { useState } from "react";
import ProfilePage from "./components/profile";

function App() {
  const cartItem = [
    {
      id: 1,
      title: "Thomson 105L Cooler",
      subtitle: "Grey, HD105",
      price: "₹9,699",
      image_link:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/air-cooler/z/u/i/-original-imahyaf6gqgxwkbd.jpeg?q=70",
      type: "cooler",
      details:
        "105L, Grey, HD105, Efficient cooling, Portable design, Suitable for medium-sized rooms.",
    },
    {
      id: 2,
      title: "HAVELLS 70L Cooler",
      subtitle: "Dark Teal, Altima",
      price: "₹9,999",
      image_link:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/air-cooler/n/a/a/-original-imagw5qkzyak9hyv.jpeg?q=70",
      type: "cooler",
      details:
        "70L, Dark Teal, Altima, Energy-efficient, Stylish design, Suitable for larger spaces.",
    },
  ];
  const [cart, setCart] = useState([...cartItem]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert("Product added to cart")
    // console.log(cart)
  };

  const onhandleCart = () => {};
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="productview/:type/:id"
              element={<ProductView addToCart={addToCart} />}
            />
            <Route path="/cartpage" element={<CartPage cart={cart} />} />
            <Route path="/profilepage" element={<ProfilePage/>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
