const id = 'cf5856ebccbb459aaba3e64adc37b54b';
const redirect = 'http://localhost:3000/playerone';

export function getUri() {
  return `https://api.instagram.com/oauth/authorize/?client_id=${id}&redirect_uri=${redirect}&response_type=token`;
}
