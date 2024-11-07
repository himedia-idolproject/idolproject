import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import PageTransitionLayout from "./components/PageTransitionLayout";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import store from "./reduxComponents/store";

function App() {
  const location = useLocation();

  return (
    <Provider store={store}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransitionLayout>
                <Home />
              </PageTransitionLayout>
            }
          />
          <Route path="/product/" element={<Layout />}>
            <Route path=":idolGroup" element={<ProductList />} />
            <Route path=":idolGroup/:id" element={<ProductDetail />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Provider>
  );
}

export default App;
