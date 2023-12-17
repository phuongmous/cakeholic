import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';

export default function NavBar ({user, setUser, cart}) {
    const _handleLogOut = () => {
        userService.logOut();
        setUser(null);
    }
    
    return (
        <nav>
            <Link to="/orders">
                Order History
            </Link>
            |
            <Link to="/shop">
                Shopping Page           
            </Link>
            |
            <h1>CAKEHOLIC</h1>
            { (user) ?
                <>
                    <Link to="" onClick={ _handleLogOut }>
                        Log Out 
                    </Link>
                </>
                :
                <Link to="/login">Login</Link>

            }
        </nav>
    );
};
