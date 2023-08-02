import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  menu: boolean = false;
  block: boolean = false;
  icons: boolean = true;
  active: any = [];
  activeCount: number = 0;
  moveCount: number = 0;
  timer: any = { minutes: 0, seconds: 0 };
  timerInterval: any = null;

  players: number = 1;
  score: number[] = [];

  board: any = [
    [
      { value: 0, state: '' },
      { value: 0, state: '' },
      { value: 1, state: '' },
      { value: 1, state: '' },
    ],
    [
      { value: 2, state: '' },
      { value: 2, state: '' },
      { value: 3, state: '' },
      { value: 3, state: '' },
    ],
    [
      { value: 4, state: '' },
      { value: 4, state: '' },
      { value: 5, state: '' },
      { value: 5, state: '' },
    ],
    [
      { value: 6, state: '' },
      { value: 6, state: '' },
      { value: 7, state: '' },
      { value: 7, state: '' },
    ],
  ];

  play(row: number, col: number) {
    console.log(this.shuffledArray(4));
    if (this.block) return;
    if (this.board[row][col].state == 'active') return;
    if (this.board[row][col].state == 'correct') return;

    this.board[row][col].state = 'active';
    this.activeCount++;
    this.active.push([row, col]);

    // Block further actions by returning
    if (this.activeCount == 1) return;
    this.block = true;

    // Check equality
    let rowFirst = this.active[0][0];
    let colFirst = this.active[0][1];
    let first = this.board[rowFirst][colFirst];

    let rowSecond = this.active[1][0];
    let colSecond = this.active[1][1];
    let second = this.board[rowSecond][colSecond];

    if (first.value == second.value) {
      first.state = 'correct';
      second.state = 'correct';
      this.activeCount = 0;
      this.active = [];
      this.block = false;
    } else {
      first.state = 'wrong';
      second.state = 'wrong';
      setTimeout(() => {
        first.state = '';
        second.state = '';
        this.activeCount = 0;
        this.active = [];
        this.block = false;
      }, 500);
    }

    this.moveCount++;
  }

  // Board Constructor Functions

  createGame(theme: string, size: number, players: number): void {
    this.menu = false;
    this.block = false;
    this.icons = theme == 'Numbers' ? false : true;
    this.active = [];
    this.activeCount = 0;
    this.moveCount = 0;
    this.timer = { minutes: 0, seconds: 0 };

    this.players = players;
    this.score = [];

    for (let i = 0; i < this.players; i++) {
      this.score.push(0);
    }

    let builderArray: number[] = this.shuffledArray(size);

    // Build this.board
    this.board = [];

    for (let i = 0; i < size; i++) {
      let arr: any = [];

      for (let j = 0; j < size; j++) {
        let val = builderArray.pop();
        arr.push({ value: val, state: 'active' });
      }

      this.board.push(arr);
    }

    setTimeout(() => {
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          this.board[i][j].state = '';
        }
      }
      this.setTimer(true);
    }, 1000 * size);
  }

  shuffledArray(num: number): number[] {
    let arr: number[] = [];

    for (let i = 0; i < (num * num) / 2; i++) {
      arr.push(i);
      arr.push(i);
    }

    let currentIndex = arr.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex],
        arr[currentIndex],
      ];
    }
    return arr;
  }

  restart() {
    this.menu = false;
    this.block = false;
    this.active = [];
    this.activeCount = 0;
    this.moveCount = 0;

    this.setTimer(true);

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        this.board[i][j].state = '';
      }
    }
  }

  setTimer(reset: boolean = false) {
    if (reset) this.timer = { seconds: 0, minutes: 0 };
    if (this.timerInterval != null) return;

    this.timerInterval = setInterval(() => {
      this.timer.seconds++;
      if (this.timer.seconds >= 60) {
        this.timer.seconds = 0;
        this.timer.minutes++;
      }
    }, 1000);
  }

  stopTimer(reset: boolean = false) {
    if (reset) this.timer = { seconds: 0, minutes: 0 };
    if (this.timerInterval == null) return;

    clearInterval(this.timerInterval);
    this.timerInterval = null;
  }

  constructor() {}
}
