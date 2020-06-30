import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
 return(
     <div className="ma4 mt0">
         <Tilt className="Tilt br2 shadow-2" options={{ max: 100 }} style={{ height: 96, width: 96 }} >
             <div className="Tilt-inner"> 
             <img src={brain} alt="logo"/>
              </div>
         </Tilt>
     </div>
 )
}
export default Logo;