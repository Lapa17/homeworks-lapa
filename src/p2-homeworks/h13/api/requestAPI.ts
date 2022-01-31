import axios from 'axios';

const requestAPI = {
    requestWithBody: (check: boolean) => {;
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success:check});
    },
};


export default requestAPI;
