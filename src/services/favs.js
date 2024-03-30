import axios from 'axios';

const favsAPI = axios.create({baseURL: "http://localhost:8000/favs"})

async function getFavs() {
    const response = await favsAPI.get('/')
    return response.data
}

async function postFav() {
    await favsAPI.post(`/${id}`);
}

async function deleteFav() {
    await favsAPI.delete(`/${id}`);
}

export {
    getFavs,
    postFav,
    deleteFav
}