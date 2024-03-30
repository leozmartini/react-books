import axios from 'axios';

const favsAPI = axios.create({baseURL: "http://localhost:8000/favs"})

async function getFavs() {
    const response = await favsAPI.get('/')
    return response.data
}

export {
    getFavs,
}