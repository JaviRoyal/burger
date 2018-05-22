import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://react-my-burguer-efc45.firebaseio.com/' 
});

export default instance;