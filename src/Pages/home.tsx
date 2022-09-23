import React, { Component } from "react";
import Slider from "../components/slider/slider";
import Welcome from "../components/welcome/welcome";

class Home extends Component{
    render(){
        return (
            <div>        
                <Slider/>
                <Welcome/>
            </div>
        );
    }
}

export default Home;