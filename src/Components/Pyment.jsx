import { useStateValue } from "./StateProvider";
import { Link, Outlet } from "react-router-dom";

export default function Pyment() {

    // function showButton(){
    //     if(state.cartList.length===0){
            
    //     }
    // }

    const gettotalamount = () => {
        let total = 0;

        state.cartList.map((item) => {
            return total = Number(total) + Number(item.price);

        })
        return total ;
    }

    const { myreducer } = useStateValue();
    const [state] = myreducer;
    return (

        <div>
            <h1 id="checkout">Checkout</h1>
            <div className="payment_container">
                <div className="payment_leftSide">
                    <h2>Payment Method</h2>
                    <hr />
                    <input className="payment_input" type="radio" id="card" name="icon" value="card" />
                    <label className="bold" htmlFor="card">Pay with Debit/Credit/ATM Cards</label>
                    <br />
                    <input  className="payment_input" type="radio" id="Net_Banking" name="icon" value="Net_Banking" />
                    <label className="bold" htmlFor="Net_Banking">Net Banking</label><br />
                    <select id="selected">
                        <option value="Axis Bank">Axis Bank</option>
                        <option value="HDFC Bank">HDFC Bank</option>
                        <option value="State Bank">State Bank</option>
                        <option value="Bank Of India">Bank Of India</option>
                    </select>
                    <br />
                    <input  className="payment_input" type="radio" id="COD" name="icon" value="COD" />
                    <label className="bold" htmlFor="COD">Cash on delivery</label>
                    <br />
                    <input className="payment_input" type="radio" id="EMI" name="icon" value="EMI" />
                    <label className="bold" htmlFor="EMI">EMI</label>

                   
                </div>

                <div className="payment_rightSide">
                    <h3>Order summary   </h3>
                    <p id="item" >Items: {state.cartList.length}</p>
                    <p id="delivery">Delivery : { (state.cartList.length ? "40":"0")}</p>
                    
                    <hr />
                    <h2 id="order_total">Order total : {state.cartList.length ? gettotalamount()+ 40 : gettotalamount()}{}</h2>
                      <Link to = {'OrderPlaced'}> <button id="order_button" disabled = {state.cartList.length===0} >Place order</button></Link> 
                      <Outlet/>
                </div>
            </div>

        </div>


    )
}