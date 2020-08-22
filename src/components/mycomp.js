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
        this.state={
            options:['data1','data2','data3']
        }
    }
    hanDeleteOptions(){
        this.setState(()=>{
            return{
                options:[]
            }
        })
    }

    render(){
        
        return(

            <div>
                <Header data1="This data for header from Mycomp"/>
                    <p>This is my childComponnt</p>
                <Action/>
                <Options optiondata={this.state.options} hdo={this.hanDeleteOptions}/>
                <Action hasOptons={this.state.options.length >0}/>
                <Addoptions/> 
                {/* <Counter/>    */}
                <Footer data2="This data for footer from Mycomp"/>
            </div>
        )
    }
}