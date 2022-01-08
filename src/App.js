import Header from "./components/header/header";
import Main from "./components/main/main";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/checkout";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
