import React, { useContext } from 'react';
import { attackCharacter } from '../actions/gameActions';

export const GameContext = React.createContext();

export const useState = () => {
  const { state } = useContext(GameContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(GameContext);
  return dispatch;
};

export const useCharacter = () => {
  const { character } = useState();
  return character;
};

export const useEnemy = () => {
  const { enemy } = useState();
  return enemy;
};

export const useTurn = () => {
  const dispatch = useDispatch();

  return action => {
    dispatch(action);
    // dispatch another action for the computer
    dispatch(attackCharacter());
  };
};
