import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { BoardComponent } from '../board/board.component';
import { ScoreComponent } from '../score/score.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    BoardComponent,
    ScoreComponent,
    ModalComponent,
  ],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {}
