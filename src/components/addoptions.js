import React, { Component } from "react";





export default class Addoptions extends Component{
    constructor(props){
        super (props)
        this.callme=this.callme.bind(this)
    }
    callme(e){
        e.preventDefault()  


        const data= e.target.elements.username.value;
        const newdata= this.props.hao(data)
    }
    render()
    {
        return(

            <div>
                <form onSubmit={this.callme}>

                    Name:<input type="text" name="username"/>
                    <button>add</button>

                </form>
            </div>
        )
    }
}