import Store from 'store/Basic';
import axios from 'axios';

const id = 'cf5856ebccbb459aaba3e64adc37b54b';
const redirect = 'http://localhost:3000/playerone';
const count = 10;

export function getUri() {
  return `https://api.instagram.com/oauth/authorize/?client_id=${id}&redirect_uri=${redirect}&response_type=token`;
}

export function getUsers(e) {
  return axios.get(`https://api.instagram.com/v1/users/search?q=${e}&count=${count}&access_token=${Store.InstaToken}`);
}
