import { Injectable, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { GameService } from './game.service';


@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  router: Router = inject(Router);
  game: GameService = inject(GameService);

  theme: 'Numbers' | 'Space' | 'Star Wars' | 'Sports' | 'Marvel' | null = null;
  players: number | null = null;
  grid: 4 | 6 | null = null;

  createGame() {
    if (this.theme == null) return;
    if (this.players == null) return;
    if (this.grid == null) return;

    this.game.createGame(this.theme, this.grid);

    setTimeout(() => {
      this.router.navigate(['/play']);
    }, 800);
  }

  constructor() {}
}
