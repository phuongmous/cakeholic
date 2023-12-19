import { useState } from 'react';

import LoginForm from "../../components/LoginForm";
import SignUpForm from "../../components/SignUpForm";

const AuthPage = ({user, setUser}) => {
    const [showSignUp, setShowSignUp] = useState(true);
    return (
        <div className="min-w-screen my-40">
            {
                showSignUp ?
                <SignUpForm setUser={ setUser } />
                :
                <LoginForm setUser={ setUser } />
            }
            <button  
            className=" bg-black text-yellow py-2 px-4 rounded hover:bg-yellow hover:text-black"
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
