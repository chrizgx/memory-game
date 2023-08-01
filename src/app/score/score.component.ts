import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent {
  game: GameService = inject(GameService);
}
