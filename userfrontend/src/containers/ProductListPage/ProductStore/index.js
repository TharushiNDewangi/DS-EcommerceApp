import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//part19-13
import { getProductsBySlug } from '../../../actions';
// import Layout from '../../components/Layout'
///part19-29
import { generatePublicUrl } from '../../../urlConfig';

import { MaterialButton } from '../../../components/MaterialUI';
import Rating from '../../../components/UI/Rating';
import Price from '../../../components/UI/Price';
import { Link } from 'react-router-dom';


import Card from '../../../components/UI/Card';


/**
* @author
* @function ProductStore
**/
//product store page
const ProductStore = (props) => {

    const product = useSelector(state => state.product);
    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000
    });


    const dispatch = useDispatch();
    useEffect(() => {
    
        //  console.log(props);

        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug));
    }, []);


    console.log({ product });
    return (
        <>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <Card headerLeft={`${props.match.params.slug} under `}
                            headerRight={
                                <MaterialButton
                                    title={"view all"}
                                    style={{ width: "96px", }}
                                    bgColor="#2874f0"
                                    fontsize="12px"
                                     />
                            }
                            style={{
                                width: "calc(100% - 40px)",
                                margin: "20px",
                            }}
                        >
                            <div style={{ display: 'flex' }}>
                                {
                                 product.productsByPrice[key].map(product =>
                                        <Link
                                            to={`/${product.slug}/${product._id}/p`}
                                            style={{
                                                display: 'block',
                                                textDecoration: "none",
                                                color: "#000",
                                            }}
                                             className="productContainer"
                                             >
                                            <div className="productImgContainer">
                                                
                                                <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                                            </div>

                                            <div className="productInfo">

                                                <div style={{ margin: '10px 0' }}>{product.name}</div>
                                                <div>
                                                    <Rating value="4.3" />
                                                   &nbsp;&nbsp;
                                                 <span
                                                        style={{
                                                            color: "#777",
                                                            fontWeight: "500",
                                                            fontsize: "12px",
                                                        }}
                                                    >
                                                        
                                                 </span>
                                                </div>

                                                <Price value={product.price} />
                                            </div>
                                        </Link>
                                        )}
                                        </div>
                                </Card>

                    );
                })
            }
        </>

    )

}

export default ProductStore