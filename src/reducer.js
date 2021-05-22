export default function reducer(state, action) {
  if (!state) {
    return {
      countHamburger: 0,
      countSoftdrink: 0,
      countFries: 0,
    };
  }
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        countHamburger: state.countHamburger + 1,
      };
    case 'DEC':
      return {
        ...state,
        countHamburger: state.countHamburger - 1,
      };
    case 'INC_DRINK':
      return {
        ...state,
        countSoftdrink: state.countSoftdrink + 1,
      };
    case 'DEC_DRINK':
      return {
        ...state,
        countSoftdrink: state.countSoftdrink - 1,
      };
    case 'INC_FRIES':
      return {
        ...state,
        countFries: state.countFries + 1,
      };
    case 'DEC_FRIES':
      return {
        ...state,
        countFries: state.countFries - 1,
      };
    default:
      return state;
  }
}
