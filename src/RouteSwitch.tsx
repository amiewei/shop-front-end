import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import App from "./App";
import Checkout from "./components/checkout/Checkout";
import ScrollToTopOnMount from "./utilities/scrolltop";
import About from "./components/About";
import AboutBulgaria from "./components/AboutBulgaria";
import NavbarComponent from "./components/Navbar";
import NotFound from "./components/ErrorPage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      {/* ScrollToTopOnMount - upon clicking new page, will always start at top of page */}
      <ScrollToTopOnMount />
      <NavbarComponent />

      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-bulgaria" element={<AboutBulgaria />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout/:checkoutStatus" element={<Checkout />} />
        <Route path="notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
