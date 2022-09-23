import React from "react";


function Profile(){ 
    const Username = sessionStorage.getItem('username')
    return(
        <div style={{textAlign:'center', minHeight:'40.7vh', paddingTop:'320px'}}>
            <h1>Welcome {Username}</h1>

        </div>
    )
}



export default Profile;