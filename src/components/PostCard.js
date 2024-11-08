import React, { useState } from 'react';
import { HeartIcon, ChatIcon } from '@heroicons/react/outline';

function PostCard({ post, onLike, onComment }) {
    const [comment, setComment] = useState('');

    return (
        <div className="bg-white p-4 mb-4 rounded-lg shadow-sm border border-gray-300">
            <div className="flex items-center mb-4">
                <img
                    src={`https://i.pravatar.cc/40?u=${post.author.username}`}
                    alt="profile"
                    className="rounded-full h-10 w-10"
                />
                <span className="ml-4 font-semibold">{post.author.username}</span>
            </div>
            <p className="mb-4">{post.content}</p>
            <div className="flex items-center space-x-4">
                <HeartIcon
                    onClick={() => onLike(post._id)}
                    className="h-6 w-6 text-gray-600 cursor-pointer"
                />
                <ChatIcon className="h-6 w-6 text-gray-600" />
            </div>
            <span className="text-sm text-gray-500 mt-2">{post.likes} likes</span>
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            onComment(post._id, comment);
                            setComment('');
                        }
                    }}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
            </div>
        </div>
    );
}

export default PostCard;
