import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  game: GameService = inject(GameService);
  router: Router = inject(Router);

  restart() {
    this.game.restart();
  }

  newGame() {
    this.game.stopTimer();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 800);
  }
}
