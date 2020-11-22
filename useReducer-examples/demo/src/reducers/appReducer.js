export const initialState = {
  quote: null,
  theme: 'dark'
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_QUOTE':
      return { ...state, quote: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}
