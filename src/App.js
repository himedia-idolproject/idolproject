import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./reduxComponents/store";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Order from "./pages/Order";
import Sell from "./pages/Sell";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:category" element={<Product />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/sell" element={<Sell />}>
              <Route path="/receipt" element={<Sell />}>
                <Route path="/payment" element={<Sell />}></Route>
              </Route>
              <Route path="/warning" element={<Sell />}>
                <Route path="/delete" element={<Sell />}></Route>
              </Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Layout>
      </Provider>
    </>
  );
}

export default App;
