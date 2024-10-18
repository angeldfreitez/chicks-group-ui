import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-select-game',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './select-game.component.html',
  styleUrl: './select-game.component.css'
})
export class SelectGameComponent {
  games: string[] = ['Game 1', 'Game 2', 'Game 3', 'Game 4'];
}
