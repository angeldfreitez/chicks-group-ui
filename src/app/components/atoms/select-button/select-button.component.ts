import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.css'
})
export class SelectButtonComponent {
  selectedValue: number = 1;
  numbers: number[] = Array.from({length: 10}, (_, i) => i + 1);
}
