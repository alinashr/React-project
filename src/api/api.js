
export const isLoggedIn = () => {
    return localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):false
}

