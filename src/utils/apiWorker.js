// /* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import st from 'store/Basic';
import axios from 'axios';


const IID = 'cf5856ebccbb459aaba3e64adc37b54b';
// const IID2 = 'b1ed5d4372b04febbca23d3e16dbf3e4';
const MKey = '277b88fd75f2417bb893e8b80f069198';

function getUrl() {
  const redirect = 'http://localhost:3000/players';

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

function getUsersOne(name) {
  axios.get(`https://api.instagram.com/v1/users/search?q=${name}&access_token=${st.instaToken}`)
    .then(res => {
      st.possibleUsersOne = res.data.data;
    })
    .catch(error => {
      console.log(error);
    });
}

function getUsersTwo(name) {
  axios.get(`https://api.instagram.com/v1/users/search?q=${name}&access_token=${st.instaToken}`)
    .then(res => {
      st.possibleUsersTwo = res.data.data;
    })
    .catch(error => {
      console.log(error);
    });
}


function getEmotionsOne() {
  for (let i = 0; i < st.cleanOne.length; i++) {
    axios.post('https://api.projectoxford.ai/emotion/v1.0/recognize', {
      url: st.cleanOne[i],
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': MKey,
      },
    })
    .then((res) => {
      for (let y = 0; y < res.data.length; y++) {
        st.emoOne.emotions.anger += res.data[y].scores.anger;
        st.emoOne.emotions.contempt += res.data[y].scores.contempt;
        st.emoOne.emotions.disgust += res.data[y].scores.disgust;
        st.emoOne.emotions.fear += res.data[y].scores.fear;
        st.emoOne.emotions.happiness += res.data[y].scores.happiness;
        st.emoOne.emotions.neutral += res.data[y].scores.neutral;
        st.emoOne.emotions.sadness += res.data[y].scores.sadness;
        st.emoOne.emotions.surprise += res.data[y].scores.surprise;
        st.emoOne.count++;
      }
    }).catch(error => console.log(error));
  }
}

function getEmotionsTwo() {
  for (let i = 0; i < st.cleanTwo.length; i++) {
    console.log(i);
    axios.post('https://api.projectoxford.ai/emotion/v1.0/recognize', {
      url: st.cleanTwo[i],
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': MKey,
      },
    })
    .then((res) => {
      for (let y = 0; y < res.data.length; y++) {
        st.emoTwo.emotions.anger += res.data[y].scores.anger;
        st.emoTwo.emotions.contempt += res.data[y].scores.contempt;
        st.emoTwo.emotions.disgust += res.data[y].scores.disgust;
        st.emoTwo.emotions.fear += res.data[y].scores.fear;
        st.emoTwo.emotions.happiness += res.data[y].scores.happiness;
        st.emoTwo.emotions.neutral += res.data[y].scores.neutral;
        st.emoTwo.emotions.sadness += res.data[y].scores.sadness;
        st.emoTwo.emotions.surprise += res.data[y].scores.surprise;
        st.emoTwo.count++;
      }
    }).catch(error => console.log(error));
  }
}

function getImagesOne(count) {
  axios.get(`https://api.instagram.com/v1/users/${st.userInfoOne.id}/media/recent/?access_token=${st.instaToken}&count=${count}`)
    .then((res) => {
      st.photosOne = res.data;
    })
    .then(() => {
      getEmotionsOne();
    })
    .catch((error) => {
      console.error(error);
    });
}

function getImagesTwo(count) {
  axios.get(`https://api.instagram.com/v1/users/${st.userInfoTwo.id}/media/recent/?access_token=${st.instaToken}&count=${count}`)
    .then((res) => {
      st.photosTwo = res.data;
    })
    .then(() => {
      getEmotionsTwo();
    })
    .catch((error) => {
      console.error(error);
    });
}


module.exports = {
  getImagesOne,
  getImagesTwo,
  getSelf,
  getUrl,
  getUsersOne,
  getUsersTwo,
  getEmotionsOne,
  getEmotionsTwo,
};
