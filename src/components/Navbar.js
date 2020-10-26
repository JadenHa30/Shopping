import React from 'react';
 
export default function Navbar (props){
    return (  
        <div className="navbar">
            <button onClick={props.toggleSidebar}>Open</button> Nav
        </div>
    );
}