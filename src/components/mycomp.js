import React, { Component } from "react";
import Footer from "./footer";
import Header from "./header";
import Action from "./action";
import Addoptions from "./addoptions";
import Options from "./options";
// import Counter from "../counter";





export default class MyComp extends Component{
    constructor(props){
        super(props)
        this.hanDeleteOptions=this.hanDeleteOptions.bind(this)
        this.handleAdd=this.handleAdd.bind(this)
        this.handleOne=this.handleOne(this)
        this.state={
            options:[]
        }
    }
    hanDeleteOptions(){
        this.setState(()=>{
            return{
                options:[]
            }
        })
    }

    handleAdd(option){
        if(!option){
            return 'Enter a valid data to Add'
        }else if(this.state.options.indexOf(option)>-1)
        {
            return 'this data exist'
        }

        this.setState((prevState)=>{
            return{
                options: prevState.options.concat(option)
            }

        })

    }
handleOne(data){
    this.setState((prevState)=>{
        options:prevState.options.filter((option)=> data!=option)
    })
}
    render(){
        
        return(

            <div>
                <Header data1="This data for header from Mycomp"/>
                    <p>This is my childComponnt</p>
                <Action/>
                <Options optiondata={this.state.options} 
                hdo={this.hanDeleteOptions}
                hd={this.handleOne}
                />
                <Action hasOptons={this.state.options.length >0}/>
                <Addoptions hao={this.handleAdd}/> 
                <Footer data2="This data for footer from Mycomp"/>
            </div>
        )
    }
}