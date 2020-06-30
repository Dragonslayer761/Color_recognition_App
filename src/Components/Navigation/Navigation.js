import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = () =>{
    return(
        <nav style={{display:'inline-flex'}}>
            <Logo/>
            <p className="f3 link dim black underline pa3 pointer" style={{position:'absolute',right:'0'}}>Sign out</p>
        </nav>
    )
}

export default Navigation;