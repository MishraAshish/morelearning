import React from "react";

export default class User extends React.Component{
    constructor(props, context){
        super(props, context);
        //props: immutable should not change
        this.title = "We are in User Component";
        this.state = {
            Name: "Kar",
            Age:22,
            Country : "United States",
            Techonology : "Object Oriented Javascript"
        }       
    }  
        
    updateAge = (number) => {
        console.log(this.state.Age);
        this.setState({
            Age : this.state.Age+number
        })            
        console.log(this.state.Age);
    }

    onHandleChange = (event) => {        
        //console.log(event);
        console.log(event.target.value);
        event.target.value = event.target.value;//react - virtual dom
        this.setState({
            Name: event.target.value            
        })
    }

    render(){  
        console.log(this.state.Age == 22 ? "Rendering" : "Re-Rendering");     
        return(            
            <div>
                <hr></hr>
                <h4>{this.title}</h4>
                <div className="col-sm-6">
                    <b>{"Name :"}</b><input type="text" value={this.state.Name} onChange={(evt) => this.onHandleChange(evt)}/>
                    <b>{"Age :"}</b><div>{this.state.Age}</div>
                    <b>{"Technology :"}</b><div>{this.state.Techonology}</div>                    
                </div>
                <button onClick={() => this.updateAge(5)}>Update</button>
            </div>
        )
    }
}