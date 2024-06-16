import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componets/headerComponent/HeaderComponent';
import NavBar from './componets/navBar/NavBarComponent';
import ComixList from './componets/content/ContentComponent';
import ComixDetail from './componets/content/comixDetail/ComixDetail';
import AddComix from './componets/createComix/AddComix';
import AdminPanelComponent from './componets/adminPanel/AdminPanelComponent';


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
                        <Route path="/comix/:id" element={<ComixDetail />} />
                        <Route path="/AddComix" element={<AddComix />} />
                        <Route path="/ComixList/filter/:keyword" element={<ComixList />} />
                        <Route path="/ComixList" element={<ComixList />} />
                        <Route path="/AdminPanel" element={<AdminPanelComponent />} />
                        
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
