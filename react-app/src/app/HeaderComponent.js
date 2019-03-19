import {NavLink} from "react-router-dom";
import React from "react";
//functional or stateless components
const Header = (props) => {
    var props = props;    
    return(
        <div>
            <h1>{props.children[0]}</h1>
            <h2>{props.children[1]}</h2>
            <NavLink to="/user" activeClassName="red"> {"GoToUser"} </NavLink>
            <NavLink to="/new" activeClassName="red">{"GoToNewComponent"} </NavLink>
        </div>
    )
}

export const Footer = (props) =>{
    return(
        <div>
            <h1>{props.display ? props.msg :"This my own message for footer" }</h1>
        </div>
    )
}

export const Body = (props) =>{
    return(
        <div>
            <h1>{ "This my own message for body"}</h1>
        </div>
    )
}

export default Header;