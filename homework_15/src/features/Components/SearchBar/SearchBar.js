import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <input 
                className="SearchBar" 
                type="text"
                 placeholder="Color's name, tags" 
                ref={props.ref}
                onChange={props.change}
                onKeyDown={props.onkeydown}
            />
        </div>
    )
}

export default SearchBar;
