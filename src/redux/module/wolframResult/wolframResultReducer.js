import actionTypes from '../../../consonants/actionTypes';


const initialState = {
  calculationResult : []
};


const wolframResultReducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WOLFRAM_RESULT:
      return {
        ...state,
        calculationResult: action.payload.result
      }
      default: {
        return state;
      }
  }
};

export default wolframResultReducer;