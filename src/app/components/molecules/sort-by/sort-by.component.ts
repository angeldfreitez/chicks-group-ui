import {Component, EventEmitter, Output} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {SortItem} from '../../../core/entitys/components/sort-by';

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
  selectedOption:string = SortItem.PRICE_HIGH_TO_LOW;
  sortOptions = [
    SortItem.PRICE_HIGH_TO_LOW,
    SortItem.PRICE_LOW_TO_HIGH,
  ];

  @Output() sortBy = new EventEmitter<string>();

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string, event: Event) {
    event.stopPropagation();
    this.selectedOption = option;
    this.sortBy.emit(this.selectedOption);
    this.isDropdownOpen = false;
  }
}
