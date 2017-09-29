import {fromJS} from 'immutable';
import {
  REQUEST_EPG,
  RECEIVE_EPG,
} from "../constants/action-types";

const initialState = fromJS({
  loading: false,
  channels: [],
});

export default function channels(state = initialState, action) {

  switch (action.type) {
    case REQUEST_EPG:
      return state.set('loading', true);

    case RECEIVE_EPG:
      return state.set('channels', fromJS(action.payload.channels)).set('loading', false);

    default:
      return state;
  }
}
