import React from 'react';

export default function UserInfo ({ user }) {
    return (
        <div>
            <h3>Account Details</h3>
            {user && (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><strong>Full Name:</strong> {user.fullName}</li>
                    <li><strong>Email:</strong> {user.email}</li>
                </ul>
            )}
        </div>
    );
}