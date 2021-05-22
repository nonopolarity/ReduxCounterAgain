import Counter from './Counter';

import { connect } from 'react-redux';

function mapStates(state) {
  return {
    count: state.countFries,
  };
}

function mapDispatch(dispatch) {
  return {
    inc: () => dispatch({ type: 'INC_FRIES' }),
    dec: () => dispatch({ type: 'DEC_FRIES' }),
  };
}

export default connect(mapStates, mapDispatch)(Counter);
