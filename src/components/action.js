import React, { Component } from "react";





export default class Action extends Component{
    callme(){
        alert('Welcome to call me')
    }
    render()
    {
        return(

            <div>

                <button  onClick={this.callme}>Call me</button>
            </div>
        )
    }
}