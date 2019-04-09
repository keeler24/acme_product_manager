import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
    return{
        managerIds:state.products.map(product => product.managerId),
        managers:state.managers
    }
}


const Managers = (props) => {
    
    return(
        <ul>{
            props.managerIds.map(managerId =>{

                return props.managers.filter(manager => manager.id === managerId)
                                    .map(manager => <li>{manager.name}</li>)
                }
            )
        }
        
        </ul>
    )
}

export default connect(mapStateToProps)(Managers)