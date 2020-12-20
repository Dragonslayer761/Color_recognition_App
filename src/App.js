import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from'./Components/Navigation/Navigation';
import ImageLinkFrom from './Components/ImageLinkFrom/ImageLinkFrom';
import ImageRecognition from './Components/ImageRecognition/ImageRecognition'
import RankComponent from './Components/RankComponent/RankComponent';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Logo from './Components/Logo/Logo';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '5a355afc49514382bb3c88928b759ea0'
 });

 const particlesOptions = {
  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color:{
      value:"#b60000"
    },
    shape:{
      type: "triangle"
    }
  }
}

class App extends Component{
  constructor(){
    super();
    this.state={
      input: '',
      imageUrl: '',
      colors: [],
      route: 'signin',
      isSignedIn: false,
      user:{
        'id': 0,
        'name':'',
       ' email':'',
        'entires': 0
      }
  }
}

  loadUser=(data)=>{
    const {id,name,email,entires} = data
    this.setState({user:{
        id : id,
        name:name,
        email: email,
        entires : entires,
    }})

  }

  onInputChange=(event)=>{
   this.setState({input:event.target.value});
  }



   setImageUrl = ()=>{
     this.setState({imageurl:this.state.input});
   }



  onSubmit=()=>{
    this.setImageUrl();
    app.models.predict('eeed0b6733a644cea07cf4c60f87ebb7', this.state.input).then(response => {
      console.log(response.rawData.outputs[0].data.colors)
      if(response){
        fetch('http://localhost:5000/admin/image',{
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
           id: this.state.user.id
          })
        }).then(response => response.json())
        .then(data =>{
          console.log(data);
          this.setState(Object.assign(this.state.user,{entires:data}));
        })
      }
      let color = response.rawData.outputs[0].data.colors;
      this.setState(Object.assign(this.state,{colors:color}));
    }).catch(err => {
      console.log(err);
    });
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render(){
    const { isSignedIn, imageurl, route,colors} = this.state;
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        <Logo />
        { route === "home" ?
          <div>
            <RankComponent userName={this.state.user.name} userEntries={this.state.user.entires}/>
            <ImageLinkFrom onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
            <ImageRecognition imageUrl={imageurl} imageColors={colors} />
          </div>
          : route === "signin" ?
            <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        }
      </div>
    )
  }
}
export default App;
