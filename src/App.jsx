import './app.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import Iphone from './components/Iphone/Iphone';
import AppStore from './components/AppStore/AppStore';
import Tv from './components/TV/Tv';
import Accessories from './components/Accessories/Accessories';
import Support from './components/Support/Support';
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/appstore" element={<AppStore />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  )
}

export default App
