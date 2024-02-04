const getUserFromLocalStorage = () => {
    return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
}
export const config = {
    headers: {
        Authorization: `Bearer ${getUserFromLocalStorage()?.token || null}`,
        Accept: "application/json"
    },
}