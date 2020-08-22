import React,{ Component } from "react";





export default class Counter extends Component{

      constructor(props){
          
          super(props)
          this.inc=this.inc.bind(this)
              this.state={
                  count:0
              }
          
      }

      componentDidMount(){
          console.log('component is ready')
      }
      componentDidUpdate()
      {
          console.log('component is updated')
      }

    inc(){
       this.setState((prevState)=>{
           return{
               count: prevState.count+1
           }
       })
        console.log(this.state)
    }
    dec(){
       this.setState((prevState)=>{
           return{
               count:prevState.count-1
           }
       })
       console.log(this.state)
    }
    reset(){
        alert("reset is invoked")
    }
    render()

    { 
        return(
        <div className="Counter">
            Count : {this.state.count}
            <button onClick={this.inc}>increment</button>
            <br/>
            <button onclick={this.dec}>decrement</button>
            <br/>
            <button onclick={this.reset}>reset</button>
        </div>
    );  
    }
}