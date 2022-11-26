import axios from 'axios';
export const register = (data) =>
  axios.post('http://143.198.190.167:5001/api/register', data).then((res) => res.data);

export const acc = (data) =>
  axios.post('http://143.198.190.167:5001/api/acc', data).then((res) => res.data);
