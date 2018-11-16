import {callAPI} from '@utils/APICaller';
import * as types from './../constant/actionsTypes';

export const checkLogin = (user) => {
  return (dispatch) => {
    let url = "";
    let method = "post";
    let data = null;
    callAPI(url, method, user.username, user.password, data)
      .then(res => {
        if (res.login) {
          return dispatch(getLogin());
        }
      });
  };
};

const getLogin = () => {
  return {
    type: types.GET_LOGIN
  }
};