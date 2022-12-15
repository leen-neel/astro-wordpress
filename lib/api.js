import dotenv from 'dotenv';
dotenv.config();

const API_URL = process.env.API_URL;

// Gets post by API URL and given path
export async function fetchAPI(path) {
    const res = await fetch(`${API_URL}${path}`);
    const json = await res.json();

    return json;
}

export async function getPosts() {
    let posts = await fetchAPI('dinos?per_page=50&_embed');
    return posts;
}
