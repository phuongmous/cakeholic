import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { LuUserCircle2, LuLogOut, LuLogIn } from "react-icons/lu";

export default function Header ({user, setUser, cart}) {
    const handleLogOut = () => {
        userService.logOut();
        setUser(null);
      };
    
      return (
        <div className="header fixed top-0 left-0 w-full hidden sm:ml-0 sm:block bg-yellow z-20">
            <div className="flex items-center justify-between bg-purple px-10 py-4">
                <div className="flex space-x-4">
                    <Link to="/" className="text-black hover:bg-yellow-1 hover:text-white rounded-md px-3 py-2 text-xl font-medium ">Home</Link>
                    <Link to="/shop" className="text-black hover:bg-yellow-1 hover:text-white rounded-md px-3 py-2 text-xl font-medium">Shop</Link> 
                </div>
                
                <h1 className="text-5xl text-black font-rubik">CAKEHOLIC</h1> 
                    {' '}

                <div className="flex space-x-4">
                    {user ? (
                    <>
                        <Link to="/profile" className="text-black hover:bg-yellow-1 hover:text-white rounded-md px-3 py-2 text-2xl font-medium"><LuUserCircle2 /></Link> {' '}
                        <Link to="/"  onClick={handleLogOut} className="text-black hover:bg-yellow-1 hover:text-white rounded-md px-3 py-2 text-2xl font-medium">
                        <LuLogOut />
                        </Link>
                    </>
                    ) : (
                        <Link to="/login" className="text-black hover:bg-yellow-1 hover:text-white rounded-md px-3 py-2 text-2xl font-medium"><LuLogIn /></Link>
                    )}
                </div>
            </div>
        </div>
      );
    }