import React from 'react';

function ShoppingItem(props) {
    return (
        <>
            <div className='list-group'>
                <button
                    className='y-btn'
                    onClick={(e) => props.handleCheckShoppingItem(e, props.user_id, props.user_shopping_item_id, props.user_shopping_item_completed)}
                >
                    <i className="material-icons">check</i>
                </button>
                <input
                    className=
                        {
                            (props.user_shopping_item_completed)
                                ? 'completed item-input' 
                                : 'item-input'
                        }
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