import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserProfile, fetchTimelinePosts } from '../services/api';
import PostCard from '../components/PostCard';

function UserProfile() {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await fetchUserProfile(username);
                setUser(userResponse.data);

                const postsResponse = await fetchTimelinePosts();
                setPosts(postsResponse.data.filter(post => post.author.username === username));
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchData();
    }, [username]);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="flex flex-col items-center mt-16 bg-gray-50 min-h-screen">
            <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-sm mb-6 border border-gray-300 text-center">
                <img
                    src={`https://i.pravatar.cc/80?u=${user.username}`}
                    alt="profile"
                    className="rounded-full h-20 w-20 mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold">{user.username}</h2>
                <p className="text-gray-500">Followers: {user.followersCount} | Following: {user.followingCount}</p>
            </div>
            <div className="w-full max-w-2xl">
                {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default UserProfile;
