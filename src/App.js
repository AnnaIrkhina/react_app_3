import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
    const[topick, setTopick] = useState('Welcome');
    //let topick = 'Welcome';
    const header = (element)=>{
        console.log('header app')
        setTopick(element);
        console.log(element);
        console.log(topick);
    }
    //const version = "01.03.2020"
    const headerMenu = ["Home",
        "Community",
    "Services",
    "Housing",
    "For sale",
    "Jobs"]
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

            <h1> <img src="./logo192.png" alt="logo" width="100" height="100" />{topick}</h1>
            <Header menu = {headerMenu} header={header}/>
            <Content/>
            <Footer menu = {footerMenu}/>

        </div>
    );
}

export default App;
