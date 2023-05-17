import React from 'react';

function PartyMemberHome(props) {

    return (
        <div className='party-member'>
            <img className="party-img" alt="" src={props.pic} />
            <div className='party-desc'>
                {props.name}
            </div>
        </div>
    );
}

export default PartyMemberHome;