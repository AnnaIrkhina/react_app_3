import React from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
    //const version = "01.03.2020"
    const headerMenu = ["Community",
    "Services",
    "Housing",
    "For sale",
    "Jobs",
    "Services"]
    const footerMenu = [
        "© 2020 01.03 version",
        "help",
        "safety",
        "privacy",
        "feedback",
        "cl jobs",
        "about"
    ]
    return (
        <div className="App">
            <Header menu = {headerMenu}/>
            <Content/>
            <Footer menu = {footerMenu}/>

        </div>
    );
}

export default App;
