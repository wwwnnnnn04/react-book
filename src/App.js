import React, {useState} from "react";
import { Route, Routes} from "react-router-dom";
import  About  from './pages/About.jsx';
import Home from "./pages/Home";
import Layout from "./components/layout/Layout.jsx";
import {BookContext} from './components/context/context.js';

function App() {
  const [bookApi, setBookApi] = useState([]);
  const [aboutBook, setAboutBook] = useState({});
  const [sort, setSort] = useState('relevance');
  const [more, setMore] = useState(40)
  const [loading, setLoading] = useState(false);
  return (
    
    <BookContext.Provider value={{bookApi, setBookApi, aboutBook, setAboutBook, sort, setSort, more, setMore, loading, setLoading}}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element={aboutBook.id && (<About />)}/>
        </Route>
      </Routes>
      </BookContext.Provider>
    
  );
}
 
export default App;
