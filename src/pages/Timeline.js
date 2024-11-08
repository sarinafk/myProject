import React, { useState, useEffect } from 'react';
import { fetchTimelinePosts, likePost, addComment } from '../services/api';
import PostCard from '../components/PostCard';

function Timeline() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await fetchTimelinePosts();
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        getPosts();
    }, []);

    const handleLike = async (postId) => {
        try {
            await likePost(postId);
            setPosts(posts.map(post => post._id === postId ? { ...post, likes: post.likes + 1 } : post));
        } catch (error) {
            console.error('Error liking post:', error);
        }
    };

    const handleComment = async (postId, comment) => {
        try {
            await addComment(postId, comment);
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div className="flex flex-col items-center mt-16 bg-gray-50 min-h-screen">
            <div className="w-full max-w-2xl">
                {posts.map((post) => (
                    <PostCard key={post._id} post={post} onLike={handleLike} onComment={handleComment} />
                ))}
            </div>
        </div>
    );
}

export default Timeline;
