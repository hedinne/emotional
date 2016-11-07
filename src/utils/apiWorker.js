/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import st from 'store/Basic';
import axios from 'axios';

const IID = 'cf5856ebccbb459aaba3e64adc37b54b';
// const IID2 = 'b1ed5d4372b04febbca23d3e16dbf3e4';
const MKey = '9022fd69b5bb477d9591f4db93c7258a';

function getUrl() {
  const redirect = 'http://localhost:3000/playerone';

  return `https://api.instagram.com/oauth/authorize/?client_id=${IID}&redirect_uri=${redirect}&response_type=token`;
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

function getEmotions(imgURL) {
  axios.post('https://api.projectoxford.ai/emotion/v1.0/recognize', {
    url: imgURL,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Host': 'api.projectoxford.ai', //eslint-disable-line
      'Ocp-Apim-Subscription-Key': MKey,
    },
  })
  .then((res) => {
    console.error(res);
  })
  .catch((error) => {
    console.error(error);
  });
}

module.exports = {
  getImages,
  getSelf,
  getUrl,
  getEmotions,
};
