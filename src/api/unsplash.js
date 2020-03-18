import axios from 'axios';

export default axios.create( {
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID XC2wc9VQj9Wv-At3I9xLSFOsth1y7lT-onJbrQM06Ik'
    }
} );


