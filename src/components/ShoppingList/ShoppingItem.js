import React from 'react';

function ShoppingItem(props) {
    return (
        <>
            <div className='list-group'>
                <input
                    className='item-input'
                    type='text'
                    defaultValue={props.user_shopping_item}
                    onChange={(e) => {props.handleEditShoppingItem(e, props.user_id, props.user_shopping_item_id)}}
                />
                <button
                    className='r-btn'
                    onClick={() => props.handleDeleteShoppingItem(props.user_shopping_item_id)}
                >
                    <i className="material-icons">delete</i>
                </button>
            </div>
        </>
    );
};

export default ShoppingItem;