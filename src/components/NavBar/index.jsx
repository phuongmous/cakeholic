import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';

export default function NavBar ({user, setUser, cart}) {
    const handleLogOut = () => {
        userService.logOut();
        setUser(null);
      };
    
      return (
        <nav>
            <Link to="/">Home</Link>
            | 
            <Link to="/shop">Shopping Page</Link> 
            | 
            <h1>CAKE</h1> 
            |
            {' '}
            {user ? (
            <>
                <Link to="/profile">User Profile</Link> | {' '}
                <Link to="/" onClick={handleLogOut}>
                Log Out
                </Link>
            </>
            ) : (
                <Link to="/login">Login/Signup</Link>
            )}
        </nav>
      );
    }