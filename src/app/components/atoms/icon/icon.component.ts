import {Component, Input} from '@angular/core';
import {Icon} from '../../../core/entitys/components/icon';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {
  @Input() iconName: string = Icon.PERSON;
  @Input() size: string = '24px';
}
