import React from 'react';


export default function UserInfo ({ user }) {
    return (
        <div className="mb-5 mx-6 sm:mx-[20rem]" >
            <h3 className="pt-[4rem] text-xl text-white font-bold mb-4">Account Details</h3>
            {user && (
                <ul className="list-none py-2 px-2 rounded bg-gray-50 bg-opacity-90">
                    <li className="mb-2">Full Name: {user.fullName}</li>
                    <li>Email: {user.email}</li>
                </ul>
            )}
        </div>
    );
}