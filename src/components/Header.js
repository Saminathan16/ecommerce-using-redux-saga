import '../style/header.css';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction';

const Header=()=>
{
    const result = useSelector((state)=>state.cartData);
    const dispatch=useDispatch();
    console.warn("data in header",result);
    return(
        <div className="header">
            <Link to="/"><h1 className='logo'>Ecommerce</h1></Link>
            <div className='search-box'>
                <input type="text" onChange={(event)=>dispatch(productSearch(event.target.value))} placeholder="Search Product" />
            </div>
            <Link to="/cart">
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" art="cart"/>

                </div>
            </Link>
        </div>
    )
}

export default Header;