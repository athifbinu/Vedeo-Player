import axios from "axios";

const KEY = 'AIzaSyBdsNsdx2EzmNu_FCwolTqsVDU3ijD2tDk';  //api key

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',   //base url
    params:{
        part:'snippet',
        type: "video",
        maxResults:5,   //totel vedeo collection
        key:KEY,

    }
    
})

