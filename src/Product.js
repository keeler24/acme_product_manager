import React from 'react'
import {connect} from 'react-redux'
import {updateManager, getManagers} from './store'

const mapStateToProps = (state) =>{
    return{
        products:state.products,
        managers:state.managers
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getManagers:() => dispatch(getManagers()),
        updateManager:(productId, managerId) => dispatch(updateManager(productId, managerId))
    }
}


class Product extends React.Component {
    constructor(){
        super()
        this.state={
            manager:'',
            product:'',
            newManager:''
        }
    }

    handleChange = (event) => {
        this.setState({newManager:event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const newManagerToUpdate = this.state.newManager
        console.log('newMan' + newManagerToUpdate)
        console.log(this.props.managers)
        const managerId  = this.props.managers.filter(manager => manager.name === newManagerToUpdate)[0].id

        
        console.log('inproduct ' +managerId)
        this.props.updateManager(this.props.product.id, managerId)
        this.setState({manager:this.props.managers.filter(manager => manager.name === this.state.newManager)[0].name})
    }

    componentDidMount(){
        let manager = this.props.managers.filter(manager => manager.id === this.props.product.managerId)
        if (manager.length === 0){
            this.setState({product:this.props.product.name, manager:null})
        }else{
            this.setState({product:this.props.product.name, manager:manager[0].name})
        } 
    }

    

    render(){
        let disabled = false
        return(
            <form onSubmit={this.handleSubmit}>
            <li className="list-group-item">
                
                    <h6>{this.state.product}
                    </h6>
                    <div className="form-group" >
                            <label>Product Manager</label>
                            <select onChange={this.handleChange} className="form-control">
                                <option>None</option>
                                {this.props.managers.map(manager => {
                                    if(this.state.newManager === this.state.manager) disabled = true;
                                    return <option key={manager.id}>{manager.name}</option>
                                })}
                            </select>
                                {disabled
                                ?<button type="submit" disabled className="btn btn-primary">Current Manager</button>
                                :<button type="submit" className="btn btn-primary">Save</button>}
                    </div>
                    
 
               
            </li>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)