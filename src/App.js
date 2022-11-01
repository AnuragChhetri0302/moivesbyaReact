
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<SingleMovie/>} />
      <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
