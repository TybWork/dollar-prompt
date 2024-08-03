import { jwtDecode } from "jwt-decode";
export const userData = () => {
    if (document.cookie.includes('token=')) {
        const token = document.cookie;
        const decodedToken = jwtDecode(token)
        return {
            userId: decodedToken.userId,
            profileHandle: decodedToken.profileHandle,
            userRole: decodedToken.userRole
        }
    }
    return {
        userId: null,
        profileHandle: null,
        userRole: null
    }

}