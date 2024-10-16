import {Component, Input} from '@angular/core';
import {Icon} from '../../../core/entitys/components/icon';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {
  @Input() iconName: Icon = Icon.PERSON;
}
