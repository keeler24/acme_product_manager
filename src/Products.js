import React from 'react'
import Product from './Product'


const Products = (props) =>{
    return(
        <ul className="list-group">
            {props.products.map(product => <Product key={product.id} product={product} />)
        }
        </ul>
    )
}

export default Products