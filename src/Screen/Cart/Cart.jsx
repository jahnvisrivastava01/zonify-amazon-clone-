import React, { useState, useEffect } from 'react'
import './Cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/actions';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  let a=0;
  let cost = cartItems.map((item)=>{return a= a+ item.price})
  useEffect(() => {
    setCartItem(cartItems)
  }, [cartItems])

  const handleRemoveFromCart = (id) => {
    toast.error("item removed from cart",{
      position:"bottom-right"
    })
    dispatch(removeFromCart(id));

  }
  return (
    <div className='cart'>
      <div className='topLeftCart'>
        <div className='topLeftCartTitle'>Shopping Cart</div>
        <div className='deselectAllCart'>Deselect all items</div>
        <div className='cartPriceTextDivder'>Price</div>

        <div className='cartItemsDiv'>
          {
            cartItems.map((item, ind) => {
              return (
                <div className='cartItemBlock' key={item.id}>

                  <div className='cartItemLeftBlock'>
                    <div className='cartItemLeftBlockImage'>
                      <img className='cartItemLeftBlockImg' src={item.imageUrl} />
                    </div>

                    <div className='cartItemLeftBlockDetails'>
                      <div className='cartItemProductName'>{item.name}</div>
                      <div className='inStockCart'>IN Stock</div>
                      <div className='elgFreeShp'>Elligile for free Shopping</div>
                      <div className='removefromcart' onClick={()=>{handleRemoveFromCart(item.id)}}>Remove From Cart</div>
                    </div>




                  </div>
                  <div className='cartItemRightBlock'>
                    Rs{item.price}
                  </div>
                </div>
              );
            })
          }



        </div>

      </div>

      <div className='topRightCart'>
        <div className='subTotalTitle'>Subtotal ({cartItem.length} items):<span className='subtotal'>Rs {a}</span></div>
        <div className='giftAddto'>
          <input type='checkbox' />
          <div>This Order Contains A gift</div>




        </div>
        <div className='proceedToBuy'>Proceed To Buy</div>

      </div>
      <ToastContainer/>
    </div>
  )
}

export default Cart