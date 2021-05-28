import React from 'react'
import './style.css'

/**
* @author
* @function Products
**/

const Products = (props) => {
  return(
    <div className="productContainer" >
      {
        props.products.map((product) => (

          <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <h5>$ {product.price}</h5>
          <button onClick = {() => props.buyNow(product.id)}>BUY NOW</button>
       </div>
        ))
      }
      
    </div>
   
   )

 }

export default Products