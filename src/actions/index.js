import { ACTIONS } from '../constants';

export const initGame = (initTime) => {
  return {
    time: initTime,
    eventType: ACTIONS.INIT_GAME
  }
}

export const gameBreak = (time) => {
  return {
    time,
    eventType: ACTIONS.GAME_BREAK
  }
}

export function kill(time, killer, victim) {
  return {
    time,
    eventType: ACTIONS.KILL,
    killer,
    victim
  }
};

export function clientConnect(time, player) {
  return {
    time,
    eventType: ACTIONS.CLIENT_CONNECT,
    player
  }
};

export function clientUserInfoChanged(time, player, change) {
  return {
    time,
    eventType: ACTIONS.CLIENT_USER_INFO_CHANGED,
    player,
    change
  }
};

export function item(time, player, item) {
  return {
    time,
    eventType: ACTIONS.ITEM,
    player,
    item
  }
};
