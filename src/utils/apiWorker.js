import Store from 'store/Basic';
import axios from 'axios';

const id = 'cf5856ebccbb459aaba3e64adc37b54b';

export function getUri() {
  const redirect = `${window.location.origin}/playerone`;
  return `https://api.instagram.com/oauth/authorize/?client_id=${id}&redirect_uri=${redirect}&response_type=token`;
}

export function getSelf() {
  axios.get(`https://api.instagram.com/v1/users/self/?access_token=${Store.instaToken}`)
    .then((res) => {
      Store.selfInfo = res.data;
    })
    .catch((error) => {
      console.warn(error);
    });
}

export function getImages() {
  axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${Store.instaToken}`)
    .then((res) => {
      Store.images = res.data;
    })
    .catch((error) => {
      console.warn(error);
    });
}
