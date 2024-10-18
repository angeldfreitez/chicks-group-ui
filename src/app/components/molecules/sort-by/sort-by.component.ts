import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-sort-by',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './sort-by.component.html',
  styleUrl: './sort-by.component.css'
})
export class SortByComponent {
  isDropdownOpen = false;
  selectedOption = 'Price';
  sortOptions = ['Price', 'Name'];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string, event: Event) {
    event.stopPropagation();
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }
}
