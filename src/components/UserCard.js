import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ user }) {
    return (
        <Link to={`/profile/${user.username}`} className="block bg-white p-4 mb-4 rounded shadow">
            <p>{user.username}</p>
        </Link>
    );
}

export default UserCard;
