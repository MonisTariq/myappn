import React, { Component } from "react";






export default class Header extends Component{
    render(){
        return(

            <div>
                <p>This is the Header</p>
                {this.props.data1}
            </div>
        )
    }

}