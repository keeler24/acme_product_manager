import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'



//Action Types
const GOT_MANAGERS_FROM_SERVER = 'GOT_MANAGERS_FROM_SERVER'
const GOT_PRODUCTS_FROM_SERVER = 'GOT_PRODUCTS_FROM_SERVER'

//Action Creators
export const gotManagersFromServer =  (managers) =>({
    type:GOT_MANAGERS_FROM_SERVER,
    managers
})

export const gotProductsFromServer = (products) => ({
    type:GOT_PRODUCTS_FROM_SERVER,
    products
})

export const getProducts = () => {
    return (dispatch) => {
        axios.get('/api/products')
            .then((resp) => dispatch(gotProductsFromServer(resp.data)))
    }
}

export const getManagers = () => {
    return (dispatch) => {
        axios.get('/api/users')
            .then((resp) => dispatch(gotManagersFromServer(resp.data)))
    }
}

export const updateManager = (productId, managerId) => {
    console.log('in store')
    console.log(managerId)
    return (dispatch) =>{
        axios.put(`/api/products/${productId}`, {managerId})
            .then((resp) => dispatch(getProducts()))
    }
}

const reducer = (state = {products:[], managers:[]}, action) => {
    switch(action.type){
        case GOT_MANAGERS_FROM_SERVER:
            return {...state, managers:[...action.managers]}
        case GOT_PRODUCTS_FROM_SERVER:
            return {...state, products:[...action.products]}
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))


export default store 