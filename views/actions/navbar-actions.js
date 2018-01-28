import {
  NAV_TOGGLE,
  NAV_REMOVE,
  NAV_ADD
} from '../constants/actionTypes';

export const toggleNav = () => {
  return {
    type: NAV_TOGGLE
  };
};
export const removeNav = () => {
  return {
    type: NAV_REMOVE
  };
};

export const addNav = () => {
  return {
    type: NAV_ADD
  };
};
