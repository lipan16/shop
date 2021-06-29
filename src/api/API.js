import axios from './axiosRequest';

function login(){
    // axios({url: '/api/login', method: 'post', data: {username: 'lipan', password: 'lipan'}});
    return axios.post('/api/login', {username: 'lipan', password: 'lipan'});
}

export default {login};
