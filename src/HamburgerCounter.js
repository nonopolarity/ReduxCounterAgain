import Counter from './Counter';

import { connect } from 'react-redux';

function mapStates(state) {
  return {
    count: state.countHamburger,
  };
}

function mapDispatch(dispatch) {
  return {
    inc: () => dispatch({ type: 'INC' }),
    dec: () => dispatch({ type: 'DEC' }),
  };
}

export default connect(mapStates, mapDispatch)(Counter);
