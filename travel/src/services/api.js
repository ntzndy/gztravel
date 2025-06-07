import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// 帖子相关 API
export const postsAPI = {
  // 获取帖子列表
  getPosts: async () => {
    const response = await api.get('/posts');
    return response.data;
  },

  // 创建新帖子
  createPost: async (postData) => {
    const response = await api.post('/posts', postData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // 获取用户的帖子
  getUserPosts: async (userId) => {
    const response = await api.get(`/posts/user/${userId}`);
    return response.data;
  },

  // 获取用户点赞的帖子
  getLikedPosts: async (userId) => {
    const response = await api.get(`/posts/liked/${userId}`);
    return response.data;
  },

  // 点赞帖子
  likePost: async (postId, userId) => {
    const response = await api.post(`/posts/${postId}/like`, { userId });
    return response.data;
  }
};

// 文化相关 API
export const cultureAPI = {
  // 获取民族文化
  getEthnicCultures: async () => {
    const response = await api.get('/cultures/ethnic');
    return response.data;
  },

  // 获取旅游景点
  getTouristSpots: async () => {
    const response = await api.get('/cultures/spots');
    return response.data;
  },

  // 获取村超比赛
  getVillageFootball: async () => {
    const response = await api.get('/cultures/football');
    return response.data;
  }
};

// 主理人相关 API
export const guidesAPI = {
  // 获取主理人列表
  getGuides: async () => {
    const response = await api.get('/guides');
    return response.data;
  },

  // 预订路线
  bookRoute: async (bookingData) => {
    const response = await api.post('/guides/book', bookingData);
    return response.data;
  }
};

// 用户相关 API
export const userAPI = {
  // 获取用户信息
  getUserProfile: async (userId) => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  },

  // 更新用户信息
  updateProfile: async (userId, profileData) => {
    const response = await api.put(`/users/${userId}`, profileData);
    return response.data;
  }
};

export default api;