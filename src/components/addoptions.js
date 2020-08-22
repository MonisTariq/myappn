import React, { Component } from "react";





export default class Addoptions extends Component{
   
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