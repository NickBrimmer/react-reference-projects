import randomCharacter from '../utils/randomCharacter';

export const UPDATE_EXPERIENCE = 'UPDATE_EXPERIENCE';
export const updateExperience = () => ({
  type: UPDATE_EXPERIENCE
});

export const SET_ENEMY = 'SET_ENEMY';
export const setEnemy = () => ({
  type: SET_ENEMY,
  payload: randomCharacter()
});

export const ATTACK_ENEMY = 'ATTACK_ENEMY';
export const attackEnemy = () => ({
  type: ATTACK_ENEMY
});

export const HEAL = 'HEAL';
export const heal = () => ({
  type: HEAL,
  payload: 5
});

export const ATTACK_CHARACTER = 'ATTACK_CHARACTER';
export const attackCharacter = () => ({
  type: ATTACK_CHARACTER
});
