import React, { Component } from 'react';
import APIService from '../../services/api-services';
import TokenService from '../../services/token-services';
import ShoppingItem from './ShoppingItem';
import './ShoppingList.css';

class ShoppingList extends Component {
    state = {
        items: [],
        newUserShoppingItem: {},
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
                this.state.items.push(response);
                const newShoppingItems = this.state.items;
                this.setState({shoppings: newShoppingItems});
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
                const newUserShoppingItems = this.state.items.filter(shopping => shopping.user_shopping_item_id !== newUserShoppingItem.user_shopping_item_id);
                newUserShoppingItem.user_id = user_id;
                newUserShoppingItems.push(newUserShoppingItem);
                newUserShoppingItems.sort((a, b) => {
                    if(a.user_shopping_item_id < b.user_shopping_item_id) {
                        return - 1;
                    } else {
                        return 1;
                    };
                });
                this.setState({items: newUserShoppingItems})
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
                const newUserShoppingItems = this.state.items.filter(shopping => shopping.user_shopping_item_id !== user_shopping_item_id);
                this.setState({items: newUserShoppingItems});
            })
            .catch(error => {
                this.setState({error: null})
            })
    }

    componentDidMount() {
        const token = TokenService.getAuthToken();
        return APIService.get('/disaster/user/shopping', token)
            .then(items => {
                this.setState({items});
            })
            .catch(error => {
                this.setState({...error});
            });
    };

    render () {
        const items = this.state.items.map(shopping => <ShoppingItem key={shopping.user_shopping_item_id} handleDeleteShoppingItem={this.handleDeleteShoppingItem} handleEditShoppingItem={this.handleEditShoppingItem} {...shopping} />)

        return (
            <>
                <h2 className='center'>Shopping List</h2>
                <form className='list-group' onSubmit={(e) => this.handleAddShoppingItem(e)} >
                    <input className='item-input' name='add_user_shopping_item' placeholder='Enter shopping item' type='text' />
                    <button className='y-btn'><i className="material-icons">add_circle</i></button>
                </form>
                {items}
            </>
        );
    };
};

export default ShoppingList;