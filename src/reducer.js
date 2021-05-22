export default function reducer(state, action) {
  if (!state) {
    return {
      countHamburger: 0,
    };
  }
  switch (action.type) {
    case 'INC':
      return {
        countHamburger: state.countHamburger + 1,
      };
    case 'DEC':
      return {
        countHamburger: state.countHamburger - 1,
      };
    default:
      return state;
  }
}
