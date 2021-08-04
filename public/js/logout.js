/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/logout',
    });
    if ((res.data.status = 'success')) {
      location.reload();
      return true;
    }
  } catch (err) {
    showAlert('error', 'Something when wrong 😓');
  }
};
