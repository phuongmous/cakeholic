import React from 'react';


export default function UserInfo ({ user }) {
    return (
        <div className="mt-[8rem] mb-10" >
            <h3 className="text-xl font-bold mb-4">Account Details</h3>
            {user && (
                <ul className="list-none text-cadetblue">
                    <li className="mb-2">Full Name: {user.fullName}</li>
                    <li>Email: {user.email}</li>
                </ul>
            )}
        </div>
    );
}