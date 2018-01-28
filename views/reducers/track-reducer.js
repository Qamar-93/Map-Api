import {
  PROVIDER_DATA_START,
  PROVIDER_DATA_FAIL,
  PROVIDER_DATA_SUCCESS
} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  provider: {
    username: '',
    currentStep: 0,
    rate: 0
  },
  error: undefined
};

const provider = (state = initialState, action) => {
  switch (action.type) {
    case PROVIDER_DATA_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case PROVIDER_DATA_SUCCESS: {
      return {
        ...state,
        provider: action.payload,
        isFetching: false
      };
    }
    case PROVIDER_DATA_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export default provider;
