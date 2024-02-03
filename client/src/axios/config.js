const getUserFromLocalStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
console.log(getUserFromLocalStorage);
export const config = {
    headers: {
        Authorization: `Bearer ${getUserFromLocalStorage?.token || null}`,
        Accept: "application/json"
    },
}