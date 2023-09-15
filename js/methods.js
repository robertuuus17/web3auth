import Cookies from "js-cookie";

// Function to get user data from cookies
export const getUserDataFromCookies = () => {
    const userData = Cookies.get('userData');
    return userData ? JSON.parse(userData) : null;
};

// Function to get wallet from cookies
export const getWalletFromCookies = () => {
    const a = Cookies.get('wallet');
    console.log(a)
    return a
};
