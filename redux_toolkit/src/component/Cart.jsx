import React from "react";
import { useSelector } from "react-redux";
import { getItemSelector } from "../redux/slices/cartSlice";

const Cart =()=>{


    console.log("Cart component rendering");
    const {cartItems , total}=useSelector( getItemSelector);

    //console.log(`Items: ${JSON.stringify(items, null, 2)}`);

    

 return(
    <>
        <div className="alert alert-success">
            <h3 className="text-center">Total Item : {cartItems.length} (RS. {total})</h3>
        </div>
    </>
 )
}

export default Cart;