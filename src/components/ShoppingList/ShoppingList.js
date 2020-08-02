import React, { Component } from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
import ShoppingItem from './ShoppingItem';
import { ExperimentalContext } from '../../contexts/ExperimentalContext';
import './ShoppingList.css';

class ShoppingList extends Component {
    static contextType = ExperimentalContext;

    state = {
        error: null,
    };
    
    handleAddShoppingItem = (e) => {
        e.preventDefault();

        this.setState({error: null})

        const user_shopping_item = e.target.add_user_shopping_item;
        const newUserShoppingItem = {
            user_shopping_item: user_shopping_item.value,
        };
        const token = TokenService.getAuthToken();

        return APIService.post('/disaster/user/shopping', newUserShoppingItem, token)
            .then(response => {
                this.context.shoppingItems.push(response);
                const newShoppingItems = this.context.shoppingItems;
                this.context.setShoppingItems(newShoppingItems);
                user_shopping_item.value = '';
            })
            .catch(error => {
                this.setState({...error});
            });
    };

    handleEditShoppingItem = (e, user_id, user_shopping_item_id) => {
        this.setState({error: null});

        const newUserShoppingItem = {
            user_shopping_item_id,
            user_shopping_item: e.target.value,
        };
        const token = TokenService.getAuthToken();

        return APIService.patch(`/disaster/user/shopping/${user_shopping_item_id}`, newUserShoppingItem, token)
            .then(() => {
                const newUserShoppingItems = this.context.shoppingItems.filter(shoppingItem => shoppingItem.user_shopping_item_id !== newUserShoppingItem.user_shopping_item_id);
                newUserShoppingItem.user_id = user_id;
                newUserShoppingItems.push(newUserShoppingItem);
                newUserShoppingItems.sort((a, b) => {
                    if(a.user_shopping_item_id < b.user_shopping_item_id) {
                        return - 1;
                    } else {
                        return 1;
                    };
                });
                this.context.setShoppingItems(newUserShoppingItems)
            })
            .catch(error => {
                this.setState({...error});
            });
    };

    handleDeleteShoppingItem = (user_shopping_item_id) => {
        this.setState({error: null})

        const token = TokenService.getAuthToken();
        return APIService.del(`/disaster/user/shopping/${user_shopping_item_id}`, token)
            .then(response => {
                const newUserShoppingItems = this.context.shoppingItems.filter(shoppingItem => shoppingItem.user_shopping_item_id !== user_shopping_item_id);
                this.context.setShoppingItems(newUserShoppingItems);
            })
            .catch(error => {
                this.setState({error: null})
            })
    }

    componentDidMount() {
        const token = TokenService.getAuthToken();
        return APIService.get('/disaster/user/shopping', token)
            .then(shoppingItems => {
                this.context.setShoppingItems(shoppingItems)
            })
            .catch(error => {
                this.setState({...error});
            });
    };

    render () {
        const shoppingItems = this.context.shoppingItems.map(shoppingItem => <ShoppingItem key={shoppingItem.user_shopping_item_id} handleDeleteShoppingItem={this.handleDeleteShoppingItem} handleEditShoppingItem={this.handleEditShoppingItem} {...shoppingItem} />)

        return (
            <>
                <h2 className='center'>Shopping List</h2>
                <form className='list-group' onSubmit={(e) => this.handleAddShoppingItem(e)} >
                    <input className='item-input' name='add_user_shopping_item' placeholder='Enter shopping item' type='text' />
                    <button className='y-btn'><i className="material-icons">add_circle</i></button>
                </form>
                {shoppingItems}
            </>
        );
    };
};

export default ShoppingList;