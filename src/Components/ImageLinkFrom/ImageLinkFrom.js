import React from 'react';

const ImageLinkFrom = ({onInputChange,onSubmit}) => {
    return(
        <div className="pa2">
            <p className="f1 tc">
                {'This magic brain will detect faces from images'}
            </p>
            <div className="pa1 center">
                <input type="text" name="" id="" className="f4 pa2 w-70 mr1" onInput={onInputChange} />
                <button className="w30 grow f4 link ph3 pv2 dibwhite bg-light-purple" onClick={onSubmit}>Detect</button>
            </div>

        </div>
    )
}

export default ImageLinkFrom;