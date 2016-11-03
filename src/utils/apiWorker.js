import st from 'store/Basic';
import axios from 'axios';

// Aðal ID
const id = 'cf5856ebccbb459aaba3e64adc37b54b';
// Auka ID
// const id = 'b1ed5d4372b04febbca23d3e16dbf3e4';

export function getUrl() {
  const redirect = 'http://localhost:3000/playerone';

  return `https://api.instagram.com/oauth/authorize/?client_id=${id}&redirect_uri=${redirect}&response_type=token`;
}

export function getSelf() {
  axios.get(`https://api.instagram.com/v1/users/self/?access_token=${st.instaToken}`)
    .then((res) => {
      st.selfInfo = res.data;
    })
    .catch((error) => {
      console.warn(error);
    });
}

export function getImages() {
  axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${st.instaToken}&count=1`)
    .then((res) => {
      st.images = res.data;
    })
    .catch((error) => {
      console.warn(error);
    });
}
