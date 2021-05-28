import React  from 'react'
import Layout from '../../components/Layout'
import ProductStore from './ProductStore'
import './style.css'

const ProductListPage = (props) => {
    return (
      
        <Layout>
            <ProductStore {...props}/>
           
        </Layout>
    )
}

export default ProductListPage