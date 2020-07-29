import React from 'react';

function SearchItem(props) {
    return (
        <div>
            <label htmlFor={props.disaster_name}>{props.disaster_name}</label>
            <input id={props.disaster_id} type='image' alt={`${props.disaster_name}`} src={`${props.disaster_image}`}/>
            {/* <label htmlFor={props.disaster_id}>
                {props.disaster_name}
                <input id={props.disaster_id} type='radio' value={props.disaster_id}/>
                <img alt={`${props.disaster_name}`} src={`${props.disaster_image}`} />
            </label> */}
        </div>
    );
};

export default SearchItem;