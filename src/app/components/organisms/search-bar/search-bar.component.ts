import {Component, EventEmitter, Output} from '@angular/core';
import {SelectGameComponent} from '../../molecules/select-game/select-game.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    SelectGameComponent
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }

}
