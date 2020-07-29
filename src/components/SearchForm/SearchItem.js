import React from 'react';
import './SearchForm.css';

function SearchItem(props) {
    return (
        <div className=''>
            {/* <label htmlFor={props.disaster_name}>{props.disaster_name}</label>
            <input id={props.disaster_id} type='image' alt={`${props.disaster_name}`} src={`${props.disaster_image}`}/> */}
            <label htmlFor={props.disaster_id}>
                {props.disaster_name}
            </label>
            <input id={props.disaster_id} name='disaster' type='radio' value={props.disaster_id}/>
            <img alt={`${props.disaster_name}`} src={`${props.disaster_image}`} />
        </div>
    );
};

export default SearchItem;