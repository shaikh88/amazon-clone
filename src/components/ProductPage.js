import React from 'react';
import './ProductPage.css';
import TextMobileStepper from "./Carosel";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ProductPage =({id, name, color,brand,price,discription,size,cart,setCart,image})=> {

    const addToBasket = () =>{
        setCart(cart+1);
      }


    return (
        <div className="product__container">
            <div className="product__display">
            <div className="imgae_carosale">
            <TextMobileStepper  image={image}/>
            </div>
        <div className="prdouct__info">
            <div className="product__info__title">
                <h1>{brand}</h1>
                <h3>{name}</h3>
                <p className="discription">{discription}</p>
            </div>
            <div className="size">
                <h5>Color: {color}</h5>
                <h5>Size: {size}</h5>
                <h3>Price: {price}</h3>
            </div>
            <div className="sizere">
                <label>Select size : </label>
                <select value={size}>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
        <button onClick={addToBasket} className="btn__productpage">
            <AddShoppingCartIcon className="shoppingcart"/>
        <div className="btn_label">Add to cart</div>
        </button>
        </div>
        </div>
            </div>
    )
}

export default ProductPage
