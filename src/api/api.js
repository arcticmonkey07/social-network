import * as axios from "axios/index.js";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "31de2209-aa12-44c8-8923-5b5a9a974e64"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          return response.data;
        });
  },
  follow(uderId) {
    return instance.post(`follow/${uderId.id}`)
  },
  unfollow(uderId) {
    return instance.delete(`follow/${uderId.id}`)
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  }
}