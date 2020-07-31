import React, { Component } from 'react';
import './ShoppingList.css';

class ShoppingItem extends Component {
    render () {
        return (
            <>
                <input type='text' defaultValue={this.props.user_shopping_item} onChange={(e) => {this.props.handleEditShoppingItem(e, this.props.user_id, this.props.user_shopping_item_id)}} />
                <button onClick={() => this.props.handleDeleteShoppingItem(this.props.user_shopping_item_id)}>Delete</button>
            </>
        );
    };
};

export default ShoppingItem;