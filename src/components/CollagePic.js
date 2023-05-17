import React from 'react';

function CollagePic(props) {

    return (
        <div className='collage-pic-wrapper'>
            <img className="collage-pic" id={'image-' + props.newkey} alt="" src={props.pic} />
        </div>
    );
}

export default CollagePic;