import axios from "axios";

const api= axios.create({
    baseUrl:"http://localhost:3005"
})

export default api