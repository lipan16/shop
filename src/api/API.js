import axios from './axiosRequest';

function login(){
    return axios('/api/login', {username: 'lipan', password: 'lipan'});
}

export default {login};
