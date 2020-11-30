import axios from 'axios'

const KEY = 'AIzaSyCt2YjjFyL_d-SyQBWBm3j3fFX8UG3r7bw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key:KEY
    }
});