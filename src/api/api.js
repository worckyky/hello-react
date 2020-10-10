import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '173391df-6c49-4e95-8ea9-b1621809323a'
    }
})

export const UsersAPI = {
    getUsers (currentPage = 1, pageSize = 10 )  {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`, )
            .then(response => response.data);
    },

}





