import Header from "./components/header/header";
import Main from "./components/main/main";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/checkout";
import Login from "./components/login/login";
import MyAccount from "./components/my-account/my-account";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/my-account" element={<MyAccount />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
