import React from 'react'

const Home = (props) =>{
    const managerOpenings = props.products
            .filter(product => product.managerId === null)
            .length
    console.log(managerOpenings)    
    return(
        <div>We have {managerOpenings === 0 ? 'have no ' : `have ${managerOpenings} `} openings for Product Managers</div>
    )
}

export default Home