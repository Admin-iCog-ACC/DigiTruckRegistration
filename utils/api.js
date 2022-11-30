import axios from 'axios';
export const register = (data) =>
  axios.post('https://digitruckethiopia.icogacc.com/api/register', data).then((res) => res.data);

export const acc = (data) =>
  axios.post('https://digitruckethiopia.icogacc.com/api/acc', data).then((res) => res.data);
