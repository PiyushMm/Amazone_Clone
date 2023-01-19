
import { useStateValue } from './StateProvider';

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
        <div className='leftSide'>
            <img src={'./Images/AdImage.png'} alt='checkout_image'/>
        </div>
        <div className='rightSide'>
           <div className = 'subtotal'>
            <p>Subtotal ({state.cartList.length} items) : <strong>&#8377;{gettotalamount()}</strong> </p>
            <p><input type={'checkbox'}/>This order contains a gift</p>
            <button>proceed to Checkout</button>
           </div>
        </div>
    </div>
  )
}
