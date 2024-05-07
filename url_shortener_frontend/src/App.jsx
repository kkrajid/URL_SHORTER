import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UrlForm from './components/UrlForm';
import RedirectPage from './components/RedirectPage';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<UrlForm />} />
                    <Route path="/:shortenedUrl" element={<RedirectPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
