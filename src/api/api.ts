import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '173391df-6c49-4e95-8ea9-b1621809323a'
    }
})

export const UsersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data);
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId: string) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('Obsolute method / Profile API object')
        return ProfileAPI.getProfile(userId);
    }
}

export const ProfileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status});
    }
}


type MeResponseType = {
    data: {id: string, email: string, login: string },
    resultCode: number
}


export const AuthAPI = {
    me() {
        return instance.get<MeResponseType>('auth/me');
    },
    login(email: string, password: string, rememberMe: boolean = true) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout() {
        return instance.delete('auth/login');
    }
}






