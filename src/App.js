import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import Product from "./pages/Product";
import store from "./reduxComponents/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
          </Routes>
        </Layout>
      </Provider>
    </>
  );
}

export default App;
