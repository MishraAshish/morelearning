import React from "react";
//functional or stateless components
const Header = () => {
    return(
        <div>
            <h1>{"This my own message for header"}</h1>
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