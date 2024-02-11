export const BASE_URL = 
process.env.NODE_ENV === "production" 
? "https://storish-api.up.railway.app/api/"
: "http://localhost:5000/api/";

