const axios = require('axios');


function getSelfInfo(token) {
  return axios.get(`https://api.instagram.com/v1/users/self/?access_token=${token}`)
  .catch((error) => {
    console.log(error);
  });
}

const api = {
  getSelf(token) {
    return getSelfInfo(token);
  },
};

export default api;
