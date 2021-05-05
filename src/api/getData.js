import axios from "axios";

export default async function getData(url, cb) {
    try {
        const response = await axios.get(url)
        const data = response.data
        cb(data)
    } catch(error) {
        console.error(error)
    }
}