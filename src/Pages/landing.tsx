import Slider from "../components/slider/slider";
import Welcome from "../components/welcome/welcome";
import About from "../components/about/aboutjson";
import React, {useLocation} from "react-router-dom";
import Services from "../components/services/servicesjson";
import Contacts from "../components/contact/contactjson";

function Landing(){

    const location : string = useLocation().pathname;
    const checkComponent = ()=>{
        switch(location){
            case '/home/Service': return <Services/>
            case '/home/About us': return <About/>
            case '/home/Contact us': return <Contacts/>
            default : return null
        }
    }
    return (

        <div>
            <div>
            <Slider/>
            <Welcome/>
            {(checkComponent)()}
            </div>
        </div>
    );
}

export default Landing