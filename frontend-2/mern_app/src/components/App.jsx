import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './Banner';
import Dashboard from './Dashboard';

const App_1 = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App_1;
