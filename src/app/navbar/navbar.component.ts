import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  router: Router = inject(Router);
  game: GameService = inject(GameService);

  restart() {
    this.game.restart();
  }

  newGame() {
    this.game.stopTimer();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 800);
  }

  openMenu() {
    this.game.menu = true;
    this.game.stopTimer();
  }

  closeMenu() {
    this.game.menu = false;
    this.game.setTimer();
  }
}
