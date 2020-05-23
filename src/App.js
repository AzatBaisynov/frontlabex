import React from 'react';
import Header from "./components/header";
import HeadingAction from "./components/headingPart";
import Services from "./components/services";
import HowWeWork from "./components/howWeWork";
import OurAdvantage from "./components/ourAdvantages";
import Sponsors from "./components/sponsors";
import Footer from "./components/footer";
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <HeadingAction/>
            <Services/>
            <HowWeWork/>
            <OurAdvantage/>
            <Sponsors/>
            <Footer/>
        </div>
    );
}

export default App;
