import React from 'react'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


export default function Header() {
    const {myreducer} = useStateValue();
    const [state]= myreducer;
    // console.log(state.authInfo);
    
    return (
        <div>
            
            <header>
                <div className='header_logo'>
                <AddBusinessIcon fontSize='large' />&nbsp; 
                <Link to={'/'}>
               
                <span className='header_logoName'>Amazon</span>
                </Link>
                    
                </div>
                <div className='header_search'> 
                    <input/>
                </div>
                <div className='header_nav'>
                    <div className='header_nav_user'>
                    <span className='header_lineOne'>{state.authInfo.user ? state.authInfo.user.email :'Hello Guest'}</span>
                    <Link to={'login'}>  <span className='header_lineTwo'>Sign In</span> </Link>
                   
                    </div>
                    <div className='header_nav_itemBasket'>
                        <Link to={'checkout'}>
                        <ShoppingCartIcon fontSize='small'  />{state.cartList.length}&nbsp;Cart
                        </Link>
                        </div>
                </div>
            </header>
        </div>
    )
}
