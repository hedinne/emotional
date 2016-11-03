import st from 'store/Basic';
import axios from 'axios';

// const id = 'cf5856ebccbb459aaba3e64adc37b54b';
const id = 'b1ed5d4372b04febbca23d3e16dbf3e4';

export function getUri() {
  // const redirect = window.location
  //   ? `${window.location.origin}/playerone`
  //   : 'http://localhost:3000/playerone';
  const redirect = 'http://localhost:3000/playerone';

  return `https://api.instagram.com/oauth/authorize/?client_id=${id}&redirect_uri=${redirect}&response_type=token`;
}

export function getSelf(token) {
  const tokez = token || st.instaToken;
  axios.get(`https://api.instagram.com/v1/users/self/?access_token=${tokez}`)
    .then((res) => {
      st.selfInfo = res.data;
    })
    .catch((error) => {
      console.warn(error);
    });
}

export function getImages() {
  axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${Store.instaToken}&count=1`)
    .then((res) => {
      st.images = res.data;
    })
    .catch((error) => {
      console.warn(error);
    });
}
