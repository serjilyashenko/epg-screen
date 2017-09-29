import {HOST} from '../constants/config';
import {
  REQUEST_EPG,
  RECEIVE_EPG,
} from "../constants/action-types";

export const getEpg = () => (dispatch) => {
  dispatch({type: REQUEST_EPG});

  return fetch(`${HOST}/epg`)
    .then(response => response.json())
    .then(payload => dispatch(receiveEpg(payload)));
};

export const receiveEpg = payload => ({
    payload,
    type: RECEIVE_EPG,
  });
