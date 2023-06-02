
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


export default function CheckoutAd() {
  const {myreducer} = useStateValue();
  const [state,] = myreducer;
 const gettotalamount =  () =>{
  let total = 0;

  state.cartList.map((item)=>{
    return total = Number(total) + Number(item.price);

  })
  return total;
}

  return (
    <div className='checkoutAd'>
        <div className='checkout_leftSide'>
            <img src={'./Images/AdImage.png'} alt='checkout_image'/>
        </div>
        <div className='checkout_rightSide'>
           <div className = 'checkout_subtotal'>
            <p>Subtotal ({state.cartList.length} items) : <strong>&#8377;{gettotalamount()}</strong> </p>
            <p><input type={'checkbox'}/>This order contains a gift</p>
            <Link to={'Pyment'}> <button  id = "checkoutAd_button" >  proceed to Checkout</button></Link>
            <Outlet/>
           </div>

        </div>
        
    </div>
  )
}
