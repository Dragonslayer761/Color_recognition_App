import React, { Component } from 'react';
import './App.css';
import Navigation from'./Components/Navigation/Navigation';
import ImageLinkFrom from './Components/ImageLinkFrom/ImageLinkFrom';
import RankComponent from './Components/RankComponent/RankComponent';

class App extends Component{
  constructor(){
    super();
    this.state={
      inpuut:'',
    }
  }
  onInputChange=(event)=>{
    console.log(event.target.value);
  }
  onSubmit=()=>{
    console.log('click');
  }
  render(){
    return(
      <div className="App">
        <Navigation/>
        <RankComponent/>
        <ImageLinkFrom onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
      </div>
    )
  }
}
export default App;
