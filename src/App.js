import React, { Component } from 'react';

import './App.css';
import MyComp from './components/mycomp';

export default class App extends Component{
   render(){
     return(
       <div className="App">
         <h3>Welcome to parent</h3>
     
          <MyComp/>
        
       </div>
     )
   }

}