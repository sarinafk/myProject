import React, { useState } from 'react';
import { createPost } from '../services/api';

function NewPost() {
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPost(content);
            setContent('');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className="flex flex-col items-center mt-16 bg-gray-50 min-h-screen">
            <div className="w-80 bg-white p-6 rounded-lg shadow-sm border border-gray-300 text-center">
                <h2 className="text-lg font-semibold mb-4">Create New Post</h2>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <textarea
                        placeholder="What's on your mind?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded text-sm focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-1.5 rounded font-semibold text-sm"
                    >
                        Share
                    </button>
                </form>
            </div>
        </div>
    );
}

export default NewPost;
