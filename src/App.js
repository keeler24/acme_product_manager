import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Managers from './Managers'
import Products from './Products'
import {Provider} from 'react-redux'
import store, {getProducts, getManagers} from './store'
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
    return {
        products:state.products,
        managers:state.managers
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getProducts: () => dispatch(getProducts()),
        getManagers: () => dispatch(getManagers())
    }
}


class App extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.getProducts()
        this.props.getManagers()
    }
 

    render(){
        //find list of managers who actually manager products
        const managers = []
        this.props.products
        .filter(product => product.managerId !== null)
        .forEach(product => {
            this.props.managers.map(manager => {
                if (product.managerId === manager.id) managers.push(manager)
            })
        })
        
        return (
            <div className="container" >
                <Nav />
                <Route path='/Home' render={(props)=><Home products={this.props.products}/>} />
                <Route path='/Products' render={(props)=><Products managers ={managers} products={this.props.products} />} />
                <Route path='/Managers' component={Managers} />
            </div>
        )
    }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(<Provider store={store}>
                    <Router>
                        <ConnectedApp />
                    </Router>
                    </Provider>, document.getElementById("root"))