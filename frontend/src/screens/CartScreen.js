import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };

  const goShoppingHandler=()=>
  {
    props.history.push('/');
  }
  return (
    <div className="row top">

        <div className="card card-body">
          <div className="col-1">          

        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
           <h2>Cart is empty</h2> 
            <ul>
            <li className="right">          
                <button
                type="button"
                onClick={goShoppingHandler}
                className="backButton"
              
              >
                Go shopping
              </button>
          
            </li>      
            </ul>
            
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img>
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <img src="https://img.icons8.com/ios-glyphs/15/000000/filled-trash.png"/>
                    </button>
                  </div>
                </div>
              </li>
            ))}         
        
    
            <li className="right">              
              Total: $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              
            </li> 
            <li className="right">          
                <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
          
            </li>      
            </ul>            
                  
        
        )}
          </div>
        </div>
      </div>       
   
  );
}
