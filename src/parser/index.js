import * as actions from '../actions';
import { ACTIONS } from '../constants';
import { getExpireTime, isExpired } from '../utils';

export default class parser {
  constructor(rawLog) {
    this.games = [];
    this.events = [],
    this.rawLog = rawLog;
    this.gameIndex = -1;
  };

  logReader(log) {
    const [time, eventType] = log;
    switch (eventType) {
      case 'InitGame:':
        this.initGame(time);
        break;
      case 'Kill:':
        this.kill(log);
        break;
      case 'ClientConnect:':
        this.clientConnect(log);
        break;
      case 'ClientDisconnect:':
        this.clientDisconnect(log);
        break;
      case 'ClientUserinfoChanged:':
        this.clientUserInfoChanged(log);
        break;
      case 'Item:':
        this.item(log);
        break;
      case 'ShutdownGame:':
        this.gameBreak(time);
      case '------------------------------------------------------------':
        this.gameBreak(time)
        break;
      default: 
        return;
    }
  };

  dispatchAction(payload) { this.events.push(payload) };

  getPlayer(playerCode) {
    const { games, gameIndex } = this;
    return games[gameIndex].players[playerCode];
  }

  gameBreak(time) {
    const lastEvent = this.events[this.events.length-1];
    if(lastEvent &&lastEvent.eventType !== ACTIONS.GAME_BREAK) {
      this.dispatchAction(actions.gameBreak(time));
      if(this.games.length > 0) {
        this.games[this.gameIndex].finishTime = time;
      }
    }
  }

  initGame(initTime) {
    const lastEvent = this.events[this.events.length-1];
    const newGame = {
      initTime,
      players: { 
        1022: {
          name: '<world>',
          code: 1022,
          inventory: []
        },
      },
    };
    if(lastEvent) {
      this.gameBreak(lastEvent.time)
    }
    this.dispatchAction(actions.initGame(initTime));
    this.games[initTime === '0:00' ? ++this.gameIndex : this.gameIndex] = newGame;
  };

  clientUserInfoChanged([time, _, player, change]) {
    const { games, gameIndex } = this;
    const parsedName = change.split('\\')[1];

    this.dispatchAction(actions.clientUserInfoChanged(time, player, parsedName));
    this.getPlayer(player).name = parsedName;
  }

  clientConnect([time, _, player]) {
    const { games, gameIndex } = this;
    this.dispatchAction(actions.clientConnect(time, player));

    games[gameIndex].players[player] = {
      name: '',
      code: player,
      inventory: []
    };
  }

  clientDisconnect([time, _, player]) {
    const {games, gameIndex} = this;
    delete games[gameIndex].players[player];
  }

  kill([time, _, killer, victim, ]) {
    this.dispatchAction(actions.kill(time, killer, victim));
  };

  item([time, _, player, item]) {
    this.dispatchAction(actions.item(time, player, item));
  
    this.getPlayer(player).inventory.push({
      item,
      expires: getExpireTime(time)
    });
  }

  runLog() {
    const logs = this.rawLog.split('\n').map(line => line.trim().split(' '));
    logs.forEach(log => {
      this.logReader(log);
    });
  };

  printGames() {
    const { games } = this;
    games.forEach((game, i) => {
      const { players } = game;
      const { initTime, finishTime } = game;
      const playersCodes  = Object.keys(players);
      const quantityOfPlayers = playersCodes.length - 1;
      const playersNames = playersCodes.map(player => {
        return players[player].name
      })
      const playersAtTheEnd = playersNames.filter(player => player !== '<world>');
      const itemsForPlayers = {};

      Object.keys(players).forEach(player => {
        itemsForPlayers[player] = [];
        players[player].inventory.forEach(item => {
          if (isExpired(item.expires, finishTime)) {
            itemsForPlayers[player][item.item] = (itemsForPlayers[player][item.item] || 0) + 1;
          }
        }); 
      });

      console.log(`The game ${i+1} started at ${initTime} and ended at ${finishTime} with ${quantityOfPlayers} player(s)`);
      if (quantityOfPlayers > 0) {
        console.log(`They were ${playersAtTheEnd.join(', ')}`)
        playersCodes.forEach(player => {
          if (player == 1022) {
            return;
          }
          if (Object.keys(itemsForPlayers[player]).length === 0) {
            console.log(`${players[player].name} ended up with nothing`);
            return;
          }
          const inventory = Object.keys(itemsForPlayers[player]).map(key => `${itemsForPlayers[player][key]} ${key}`);
          console.log(`${players[player].name} ended up with ${inventory.join(', ')}`);
        })
      };
    });
  }
}
