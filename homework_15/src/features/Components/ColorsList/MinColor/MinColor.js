import React from 'react';

const MinColor = (props) => {
    return (
        <div className="Mini" style={{backgroundColor: props.color}}>
            <button id={props.id} onClick={props.click}>
                <i className="material-icons">close</i>
            </button>
        </div>
    )
}

export default MinColor;
