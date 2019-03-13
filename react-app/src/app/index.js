console.log("Test my application with --hot");
import React from "react";
import Header, {Footer as Ftr, Body} from "./HeaderComponent";
import User from "./UserComponent";
import {render} from "react-dom";

class App extends React.Component{//state
    constructor(){
        super();        
    }  
    render(){
        let myvar = true;
        return(//JSX : Javascript XML
            <div>                
                <Header/>                
                {myvar ? <Body/> : ""}
                <User/>
                <Ftr display={true} msg={"Message from Index Page"}/>
            </div>            
        )
    }
}

render(<App/>, document.getElementById("app"))