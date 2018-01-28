import {
  PROVIDER_DATA_START,
  PROVIDER_DATA_FAIL,
  PROVIDER_DATA_SUCCESS,
} from '../constants/actionTypes';

const providerDataStart = () => {
  return {
    type: PROVIDER_DATA_START
  };
};

const providerDataFail = err => {
  return {
    type: PROVIDER_DATA_FAIL,
    payload: err.message
  };
};

const providerDataSuccess = provider => {
  return {
    type: PROVIDER_DATA_SUCCESS,
    payload: provider
  };
};

export const fetchProviderData = () => dispatch => {
  dispatch(providerDataStart());

  fetch('/api/v1/track')
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }

      return res.json();
    })
    .then(data => dispatch(providerDataSuccess(data)))
    .catch(err => dispatch(providerDataFail(err.message)));
};
