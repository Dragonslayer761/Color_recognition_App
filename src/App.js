import React, { Component } from 'react';
import './App.css';
import Navigation from'./Components/Navigation/Navigation';
import ImageLinkFrom from './Components/ImageLinkFrom/ImageLinkFrom';
import ImageRecognition from './Components/ImageRecognition/ImageRecognition'
import RankComponent from './Components/RankComponent/RankComponent';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '559d8ffe80834b4f8174c46fedd4c2d9'
 });

class App extends Component{
  constructor(){
    super();
    this.state={
      input : '',
      imageurl : ''
    }
  }
  onInputChange=(event)=>{
   this.setState({input:event.target.value});
  }
   setImageUrl = ()=>{
     this.setState({imageurl:this.state.input});
   }
  onSubmit=()=>{
    this.setImageUrl();
    app.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", this.state.input).then(
    function(response) {
      let colors=response.rawData.outputs[0].data.colors;
      for(let i of colors){
        console.log(i.w3c.name);
      }
    },
    function(err) {
      // there was an error
    }
  );
  }
  render(){
    return(
      <div className="App">
        <Navigation/>
        <RankComponent/>
        <ImageLinkFrom onInputChange={this.onInputChange} onSubmit={this.onSubmit} /> 
        <ImageRecognition imageUrl={this.state.imageurl} />
      </div>
    )
  }
}
export default App;
