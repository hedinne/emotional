// /* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import st from 'store/Basic';
import axios from 'axios';


const IID = 'cf5856ebccbb459aaba3e64adc37b54b';
// const IID2 = 'b1ed5d4372b04febbca23d3e16dbf3e4';
// const MKey = '9022fd69b5bb477d9591f4db93c7258a';
const baseURL = process.env.BASEURL;

function getUrl() {
  const redirect = baseURL ? `${baseURL}/players` : 'http://localhost:3000/players';

  return `https://api.instagram.com/oauth/authorize/?client_id=${IID}&redirect_uri=${redirect}&response_type=token&scope=basic+public_content`;
}

function getSelf() {
  axios.get(`https://api.instagram.com/v1/users/self/?access_token=${st.instaToken}`)
    .then((res) => {
      st.selfInfo = res.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

function getImages(count) {
  axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${st.instaToken}&count=${count}`)
    .then((res) => {
      st.selfImages = res.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

function getUsers(name) {
  axios.get(`https://api.instagram.com/v1/users/search?q=${name}&access_token=${st.instaToken}`)
    .then(res => {
      st.possibleUsersOne = res.data.data;
    })
    .catch(error => {
      console.log(error);
    });
}

module.exports = {
  getImages,
  getSelf,
  getUrl,
  getUsers,
};
