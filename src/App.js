import React from "react";
import { Route, Routes} from "react-router-dom";
import  About  from './pages/About.jsx';
import Home from "./pages/Home";
import Layout from "./components/layout/Layout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
