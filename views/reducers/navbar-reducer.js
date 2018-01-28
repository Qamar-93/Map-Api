import {
  NAV_TOGGLE,
  NAV_REMOVE,
  NAV_ADD
} from '../constants/actionTypes';

const initialState = {
  navShown: false,
  hasNav: true
};

const navbar = (state = initialState, action) => {
  switch (action.type) {
    case NAV_TOGGLE: {
      return {
        ...state,
        navShown: !state.navShown
      };
    }
    case NAV_REMOVE: {
      return {
        ...state,
        hasNav: false
      };
    }
    case NAV_ADD: {
      return {
        ...state,
        hasNav: true
      };
    }
    default:
      return state;
  }
};

export default navbar;
