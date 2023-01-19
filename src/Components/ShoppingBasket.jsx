import React from 'react'
import { useStateValue } from './StateProvider';

export default function ShoppingBasket() {
  const { myreducer } = useStateValue();
  const [state,dispatch] = myreducer;
  const clickHandler = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
  payload: id
    })
  }
  return (
    <div className='shoppingBasket'>
      <h2>Shopping Basket</h2>
      <hr />
      <ul className='list'>
        {state.cartList.map((item, index) => (<li>
          <div className='imageHolder'>
            <img src={item.imageURL} alt='mouse mage' />
          </div>
          <div className='itemDetails'>
            <div>{item.title}</div>
            <p><strong>&#8377; {item.price}</strong></p>
            <div>{item.rating}</div>
            <button onClick={()=>clickHandler(item.id)}>Remove from Cart</button>
          </div>
        </li>))
        }
      </ul>
    </div>
  )
}
