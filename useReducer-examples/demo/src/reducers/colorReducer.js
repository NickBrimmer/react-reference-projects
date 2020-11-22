export const initialState = {
  text: '',
  backgroundColor: '#FFFFFF',
  textColor: '#000000'
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'TEXT':
      return { ...state, text: action.payload };
    case 'BACKGROUND_COLOR':
      return { ...state, backgroundColor: action.payload };
    case 'TEXT_COLOR':
      return { ...state, textColor: action.payload };
    default:
      return state;
  }
}
