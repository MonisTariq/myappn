import React,{ Component } from "react";






export default class Footer extends Component{
    render()
    {
        return(

            <div>
                <p>This is Footer</p>
                {this.props.data2}
            </div>
        )
    }
}