import axios from 'axios';

export const apiKey = 'AIzaSyAIQ7Q5r9Mr4i_ZXLM4lECXmUMIYPN8wfU';

export const taskAxios = axios.create({
  baseURL: 'https://tasks-c4d55.firebaseio.com/'
});

export const authAxios = axios.create({
  baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'
});
