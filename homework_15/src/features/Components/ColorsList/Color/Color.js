import React from 'react';

const Color = (props) => {
    return (
        <div className="Color" style={{backgroundColor: props.color}}>
            <button id={props.id} onClick={props.click}>
                <i className="material-icons">add</i>
                <span>Add</span>
            </button>
        </div>
    )
}

export default Color;
