import React, { useState } from 'react';
import { searchUsers } from '../services/api';
import UserCard from '../components/UserCard';

function UserSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await searchUsers(query);
            setResults(response.data);
        } catch (error) {
            console.error('Error searching users:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-2xl font-bold mb-5 text-center">Search Users</h2>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Search
                </button>
            </form>
            <div className="w-full max-w-lg mt-5">
                {results.map((user) => (
                    <UserCard key={user._id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default UserSearch;
