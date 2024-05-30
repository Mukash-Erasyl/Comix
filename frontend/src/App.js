import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './componets/headerComponent/HeaderComponent';
import NavBar from './componets/navBar/NavBarComponent';
import ComixList from './componets/content/ContentComponent';
import ComixDetail from './componets/content/comixDetail/ComixDetail';

function App() {
    return (

        <Router>
            <div className="app_wallaper">

                <div className="header">
                    <Header />

                </div>
                <div className="navBar">
                    <NavBar />

                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<ComixList />} />
                        <Route path="/comix/:id" element={<ComixDetail />} /> {/* Добавлен маршрут для ComixDetail */}
                    </Routes>

                </div>


            </div>
        </Router>
    );
}

export default App;
