import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  
  if (products.length === 0) {
    return <h1>Cart is empty</h1>;
  }
  return (
    <>
      {products.map((product) => (
        <div className="row w-75">
          <div className="col-md-4">
            <img
              src={product.image}
              alt={product.title}
              height="200px"
              width="180px"
            />
          </div>
          <div className="col-md-4">
            <h3>{product.title}</h3>
            <p className="lead fw-bold">${product.price}</p>
            {/* <button
              className="btn btn-outline-dark me-4"
              onClick={() => handleRemove(product.id)}
            >
              <i className="fa fa-minus"></i>
            </button>
            <button className="btn btn-outline-dark me-4"
            onClick={()=>handleAdd(product.id)}>
              <i className="fa fa-plus"></i>
            </button> */}
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={() => handleRemove(product.id)}
            >
              Remove From Cart
            </button>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Cart;
