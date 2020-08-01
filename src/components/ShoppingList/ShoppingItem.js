import React, { Component } from 'react';
import './ShoppingList.css';

class ShoppingItem extends Component {
    render () {
        return (
            <>
                <div className='list-group'>
                    <input className='item-input' type='text' defaultValue={this.props.user_shopping_item} onChange={(e) => {this.props.handleEditShoppingItem(e, this.props.user_id, this.props.user_shopping_item_id)}} />
                    <button className='r-btn' onClick={() => this.props.handleDeleteShoppingItem(this.props.user_shopping_item_id)}><i className="material-icons">delete</i></button>
                </div>
            </>
        );
    };
};

export default ShoppingItem;