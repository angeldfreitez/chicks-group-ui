import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-number-select',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './number-select.component.html',
  styleUrl: './number-select.component.css'
})
export class NumberSelectComponent {
  value: number = 1;
  min: number = 0;
  max: number = 10;

  increase() {
    if (this.value < this.max) {
      this.value++;
    }
  }

  decrease() {
    if (this.value > this.min) {
      this.value--;
    }
  }
}
