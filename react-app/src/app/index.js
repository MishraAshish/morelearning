//console.log("Test my application with --hot");
import React from "react";
import Header, {Footer as Ftr, Body} from "./HeaderComponent";
import User from "./UserComponent";
import NewComponent from "./NewComponent";
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {render} from "react-dom";
import {Provider} from "react-redux";
import store from "./store";


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
                <Router>
                    <div>                            
                        <Header>
                            <h1>{"First Child From Home"}</h1>    
                            <h2>{"Second Child From Home"}</h2>    
                        </Header>                
                        <Switch>                             
                            <Route path="/user" exact component={User}/>
                            <Route path="/new" component={NewComponent}/>
                            <Route path="*" component={Body}/>
                            {/* <User greetFunc={this.greetMe} prp3={this.state.parentprop}/>*/}
                        </Switch>                        
                        <Ftr display={true} msg={"This is Footer Component"} />
                        {/* <hr/>
                            <button onClick={() => this.updateProp()}>Update Parent Props</button>
                        <hr/> */}
                    </div>  
                </Router>   
            </div>  

        )
    }
}

render(<Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById("app"))