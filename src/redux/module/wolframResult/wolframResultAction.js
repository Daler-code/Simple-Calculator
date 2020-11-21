import actionTypes from '../../../consonants/actionTypes';

var Client = require('node-wolfram');
var Wolfram = new Client('J8P75Y-W6TVX5A2XV');

const getWolframResult = (calculationInputs) => () => {
  dispatch({
    type: actionTypes.GET_WOLFRAM_RESULT,
    payload: Wolfram.query(calculationInputs, function(err, result) {
      if (err) {
          console.log(err, 'err');
        } else {
          console.log(result, 'result');
        }
     })
  })
};

export default getWolframResult;