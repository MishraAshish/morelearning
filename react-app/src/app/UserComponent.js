import React from "react";

export default class User extends React.Component{
    constructor(props, context){
        super(props, context);//avoid data inconsistancy 
        //props: immutable should not change
        this.title = "We are in User Component";
        this.state = {
            Name: "Kar",
            Age:22,
            Country : "United States",
            Techonology : "Object Oriented Javascript"//,
            //City : props.City ? props.City: "New York",
            //Items: props.Items
        } 
        console.log("Constructor Initialized");      
    }  
        
    componentWillMount(){
        console.log("Creation - We are in - componentWillMount");
    }

    updateAge = (number) => {
        console.log(this.state.Age);
        this.setState({
            Age : this.state.Age+number
        }) 
        
        // this.setState({
        // //Items:[{/*ownitems}*/]
        // })
        //this.forceUpdate(()=>{
        //    this.state.Name = "ForecUpdate"
        //});//avoided

        console.log(this.state.Age);
    }

    onHandleChange = (event) => {        
        //console.log(event);
        console.log(event.target.value);
        event.target.value = event.target.value;//react - virtual dom
        this.setState({
            Name: event.target.value            
        })
        props.prp3 = "asdasdas";
    }

    componentWillReceiveProps(nextProps){
        console.log("UpdateLC - We are in - componentWillReceiveProps nextProps :", nextProps);        
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("UpdateLC - We are in - shouldComponentUpdate");        
        console.log("Age :", nextState.Age);        
        if (nextState.Age > 30) {
            return false;
        }else{
            return true;
        }        
    }
    
    componentWillUpdate(nextProps, nextState){
        console.log("UpdateLC - We are in - componentWillUpdate");
        console.log("nextProps",nextProps);
        console.log("nextState",nextState);
    }

    componentDidUpdate(prevProps, prevState){        
        console.log("UpdateLC - We are in - componentDidUpdate");
        console.log("prevProps",prevProps);
        console.log("prevState",prevState);
        
    }

    componentDidMount(){
        console.log("Creation - We are in - componentDidMount");
        //setInterval(){}
        //setTimeout(){}        
    }

    componentWillUnmount(){
        console.log("Destruction - We are in - componentWillUnmount");
        //clearInterval(){}
        //clearTimeout(){}
    }

    render(){  
        console.log(this.state.Age == 22 ? "Child Rendering" : "Child Re-Rendering");     
        return(            
            <div>
                <hr></hr>
                {/* <Component City={props.City} CityLocal={this.state.City}/> */}
                <h4>{this.title}</h4>
                <div className="col-sm-6">
                    <b>{"Name :"}</b><input type="text" value={this.state.Name} onChange={(evt) => this.onHandleChange(evt)}/>
                    <b>{"Age :"}</b><div>{this.state.Age}</div>
                    <b>{"Technology :"}</b><div>{this.state.Techonology}</div>  
                    <b>{"Name Update :"}</b><div>{this.state.Name}</div>                    
                </div>
                <button onClick={() => this.updateAge(5)}>Update</button>
                <hr/>
                <button className={"btn btn-primary"} onClick={() => this.props.greetFunc(this.state.Name)} >Greet In Parent </button>
            </div>
        )
    }
}