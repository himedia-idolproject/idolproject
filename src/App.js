import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import store from "./reduxComponents/store";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <Provider store={store}>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:idolGroup" element={<ProductList />} />
            <Route path="/product/:idolGroup/:id" element={<ProductDetail />} />
            {/* <Route path="/order" element={<Order />} /> */}
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Provider>
  );
}

export default App;
