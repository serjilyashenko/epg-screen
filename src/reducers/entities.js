import {fromJS} from 'immutable';
import {
  ACTION_1,
} from "../constants/action-types";

const initialState = fromJS({
  count: 0,
});

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ACTION_1:
      return state.set('count', state.get('count') + 1);

    default:
      return state;
  }
}
