import { useState } from 'react';

import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";

const AuthPage = ({user, setUser}) => {
    const [showSignUp, setShowSignUp] = useState(true);
    return (
        <div className="mb-[8rem]">
            {
                showSignUp ?
                <SignUpForm setUser={ setUser } />
                :
                <LoginForm setUser={ setUser } />
            }
            <button  
            className="bg-dark bg-opacity-20 text-black  py-1 px-[4.7rem] sm:px-[2.6rem] md:px-[3.6rem] lg:px-[4.6rem] mt-6 mx-[5.6rem] rounded transition-transform transform hover:scale-110"
            onClick={ () => setShowSignUp(!showSignUp) }
            >
                {
                    showSignUp ?
                    'LOG IN'
                    :
                    'SIGN UP'
                }
            </button>
        </div>
    );
}

export default AuthPage;
