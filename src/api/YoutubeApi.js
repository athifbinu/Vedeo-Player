import axios from "axios";

const url = process.env.REACT_APP_BASE_URL
const key = process.env.REACT_APP_API_KEY


export default axios.create({
    baseURL: url,   //base url
    params: {
        part: 'snippet',
        type: "video",
        maxResults: 25,   //totel vedeo collection
        key: key,       //key
    }
})
