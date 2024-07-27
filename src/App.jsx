import Navbar from "./components/Navbar";

import Banner from "./components/Banner";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Routes>{/* <Route path='/' element={<Home />} /> */}</Routes>
    </BrowserRouter>
  );
}

export default App;
