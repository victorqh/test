//App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PageA from './pages/PageA';
import PageB from './pages/PageB';

const App = () => {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<PageA />} />

                <Route path="/pageb" element={<PageB />} />
            </Routes>
        </Router>
    );
};

export default App;
