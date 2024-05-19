import React from "react";
import {useDispatch} from "react-redux"
import {addItem} from "../redux/slices/cartSlice"

const Product =(props)=>{
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const product = {
            id: props.id,
            productName: props.productName,
            price: props.price,
            image: props.image
        };
        console.log("Dispatching addItem with product:", product);
        dispatch(addItem(product));
    };


 return(
    <>
        <div className="card" style={{width:"18rem", margin:'10px'}}>
            <img className="card-img-top" src={props.image} alt={props.productName}/>
            <div className="card-body">
                <h5 className="card-title">{props.productName}</h5>
                <p className="card-text">RS. {props.price}</p>
                <button className="btn btn-primary" onClick={handleAddToCart}> Add to cart</button>
            </div>
        </div>
    </>
 )
}

export default Product;