console.log("Test my application with --hot");
import React, {Component, PureComponent} from "react";
import Header, {Footer} from "./HeaderComponent";
import {render} from "react-dom";

class App extends Component{
    constructor(){
        super();        
    }  
    render(){
        return(
            <div>
                <Header/>
                <Footer/>
            </div>
        )
    }
}

render(<App/>, document.getElementById("app"))