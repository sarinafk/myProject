import axios from 'axios';

const API_BASE_URL = 'https://instagram-backend-ugd3.onrender.com/api';

export const login = (username, password) => {
    return axios.post(`${API_BASE_URL}/user/login`, { username, password });
};

export const signup = (email, username, password) => {
    return axios.post(`${API_BASE_URL}/user/signup`, { email, username, password });
};

export const fetchTimelinePosts = () => {
    return axios.get(`${API_BASE_URL}/article/timeline`);
};

export const createPost = (content) => {
    return axios.post(`${API_BASE_URL}/article`, { content });
};

export const likePost = (postId) => {
    return axios.post(`${API_BASE_URL}/article/${postId}/like`);
};

export const addComment = (postId, content) => {
    return axios.post(`${API_BASE_URL}/article/${postId}`, { content });
};

export const searchUsers = (query) => {
    return axios.get(`${API_BASE_URL}/user/searchUser?query=${query}`);
};

export const fetchUserProfile = (username) => {
    return axios.get(`${API_BASE_URL}/user/u/${username}`);
};
