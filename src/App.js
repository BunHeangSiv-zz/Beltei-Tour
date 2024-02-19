// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutOne from './components/LayoutOne';
import LayoutTwo from './components/LayoutTwo';
import IndexEn from './components/PageEnglish/index';
import Indexkh from './components/PageKhmer/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutOne><IndexEn /></LayoutOne>} />
        <Route path="/Khmer" element={<LayoutTwo><Indexkh /></LayoutTwo>} />
      </Routes>
    </Router>
  );
}

export default App;


