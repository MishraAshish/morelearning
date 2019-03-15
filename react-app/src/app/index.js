//console.log("Test my application with --hot");
import React from "react";
import Header, {Footer as Ftr, Body} from "./HeaderComponent";
import User from "./UserComponent";
import {render} from "react-dom";

class App extends React.Component{//state
    constructor(){
        super();     
        this.state ={
            parentprop :"Test parentprop"
        }
    }

    greetMe(name){
        //console.log("Good Morning :", name)
        alert("Good Morning :" + name)
    }

    updateProp = () =>{
        console.log("sadasdsa", this.state.parentprop)
        this.setState({
            parentprop: "Updated Property Value"           
        })         
    }

    render(){
        console.log("Parent Rendering");
        let myvar = true;
        return(//JSX : Javascript XML
            <div>          
                <Header/>                
                {myvar ? <Body/> : ""}
                <User greetFunc={this.greetMe} prp3={this.state.parentprop}/>
                <Ftr display={true} msg={"Message from Index Page"}/>

                <hr/>
                <button onClick={() => this.updateProp()}>Update Parent Props</button>
            </div>            
        )
    }
}

render(<App/>, document.getElementById("app"))