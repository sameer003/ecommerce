import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/checkout/checkout";
import Header from "./components/header/header";
import Login from "./components/login/login";
import Main from "./components/main/main";
import MyAccount from "./components/my-account/my-account";
import "./App.css";

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
