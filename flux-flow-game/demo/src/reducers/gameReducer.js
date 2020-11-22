import {
  UPDATE_EXPERIENCE,
  SET_ENEMY,
  ATTACK_ENEMY,
  HEAL,
  ATTACK_CHARACTER,
} from '../actions/gameActions';

export const initialState = {
  character: {
    image: 'https://pyxis.nymag.com/v1/imgs/26d/311/5d77f80ae9cb39ad03ecbcfc57faf60472-31-ice-king.rsquare.w1200.jpg',
    health: 100,
    attack: 5,
    experience: 0
  },
  enemy: {
    image: 'https://i.pinimg.com/originals/a7/d3/41/a7d341f666ed2241e7e48b25770e1d83.jpg',
    health: 20,
    attack: 1,
    experience: 2
  }
};

export default function reducer(state, action) {
  switch(action.type) {
    case ATTACK_ENEMY:
      return { ...state, enemy: { ...state.enemy, health: state.enemy.health - state.character.attack } };
    case ATTACK_CHARACTER:
      return { ...state, character: { ...state.character, health: state.character.health - state.enemy.attack } };
    case HEAL:
      return { ...state, character: { ...state.character, health: state.character.health + action.payload } };
    case SET_ENEMY:
      return { ...state, enemy: action.payload };
    case UPDATE_EXPERIENCE:
      return {
        ...state,
        character: {
          ...state.character,
          health: state.character.health + state.enemy.experience,
          attack: state.character.attack + state.enemy.experience,
          experience: state.character.experience + state.enemy.experience
        }
      };
    default:
      return state;
  }
}
