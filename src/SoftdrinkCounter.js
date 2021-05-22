import Counter from './Counter';

import { connect } from 'react-redux';

function mapStates(state) {
  return {
    count: state.countSoftdrink,
  };
}

function mapDispatch(dispatch) {
  return {
    inc: () => dispatch({ type: 'INC_DRINK' }),
    dec: () => dispatch({ type: 'DEC_DRINK' }),
  };
}

export default connect(mapStates, mapDispatch)(Counter);
