import React from 'react';

function SearchItem(props) {
    console.log(props)
    return (
        <div>
            <h2>{props.disaster}</h2>
            {/* <input id={props.disaster} type='image' alt={`${props.disaster}`} src={`${props.disaster.img}`}/> */}
        </div>
    );
};

export default SearchItem;