import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';
import {CardStyle} from '../../../core/entitys/components/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cardStyle: CardStyle = {
    backgroundColor: '#303141',
    padding: '20px',
    margin: '50px 0',
    borderColor: 'var(--border-color)',
    width: '100%',
    height: '100%'
  };

}
