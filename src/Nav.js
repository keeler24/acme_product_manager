import React from 'react'
//import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

const Nav = () =>{
    return(
        <nav className="nav navbar-nav">
        <div className="nav nav-pills" style={{marginBottom: 20 + "px" }}>
            <div className="nav=item"><NavLink activeClassName="active" className="nav-link" to='/Home'>Home </NavLink></div>
            <NavLink activeClassName="active" className="nav-link" to='/Products'>Products </NavLink>
            <NavLink activeClassName="active" className="nav-link" to='/Managers'>Managers </NavLink>
        </div>
        </nav>
    )
}

export default Nav