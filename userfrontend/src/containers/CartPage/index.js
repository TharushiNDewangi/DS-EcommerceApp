import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
//minoli
import "./style.css"


const CartPage = (props) => {
    const cart = useSelector((state) => state.cart);
    return (
        <Layout>
            <div className="cartContainer" style={{ alignItems: "flex-start" }}>
                <Card
                    headerLeft={`My Cart`}
                    headerRight={<div>Deliver to</div>}
                    style={{ width: "calc(100% - 400px)", overflow: "hidden" }}>

                    {JSON.stringify(cart.cartItems)}
                    <div className="flexRow">
                        <div className="cartProductContainer">
                            <img src="" /> </div>
                        <div className="cartItemDetails">
                            <div>
                                product name
                            </div>
                            <div>delivery in 3 - 5 days</div>
                        </div>
                    </div>

                </Card>
                <Card style={{
                    width: '500px'

                }}>price</Card>
            </div>
        </Layout>
    );

}

export default CartPage;

