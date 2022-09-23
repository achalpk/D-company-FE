import React from "react";
import { Redirect, Route } from "react-router-dom";
import ChatIcon from "../components/chat/chaticon";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

type privateProps={
    children : React.ReactNode,
    path : string,
    exact ?: boolean,
}

function PrivateRoute({children, ...rest }:privateProps){
    const isAuth = sessionStorage.getItem('isAuth');

    return(
        <Route {...rest} render= {()=>{            
            return isAuth === 'true'? 
            <div>
                <Header/>
                {children}
                <ChatIcon/>
                <Footer/>
            </div> :
                <Redirect to="/login"/>            
        }}/>
    )
}

export default PrivateRoute;