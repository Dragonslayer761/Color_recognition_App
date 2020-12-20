import React from 'react';
import './ImageRecognition.css'

const ImageRecognition = ({ imageUrl ,imageColors}) => {
   // let elements=imageColors.map(i => <div key={i.w3c.name} style={{backgroundColor : `${i.w3c.color}`}}>{i.w3c.name}</div>)
    return (
        <div className='center ma'>
            <div className='absolute mt2 flex' >
                <img id='inputimage' alt='' src={imageUrl} width='300px' />
                <div width='500px' >
                    {imageColors.map((i,j) => <div key={j} style={{backgroundColor : i.raw_hex , color:'white', width:'300px'}}><p>{i.w3c.name}</p><br/><p>{i.value *100}</p></div>)}
                </div>
            </div>
        </div>
    )
}

export default ImageRecognition;
