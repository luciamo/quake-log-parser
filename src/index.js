import parser from './parser';
const values = document.getElementById('log').value;

const game = new parser(values);
game.runLog();

game.printGames()
