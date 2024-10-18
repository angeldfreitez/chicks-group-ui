import {Component, Input} from '@angular/core';
import {ButtonStyle} from '../../../core/entitys/components/button';
import {NgClass, NgIf, NgStyle} from '@angular/common';
import {IconComponent} from '../icon/icon.component';
import {Icon} from '../../../core/entitys/components/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgStyle,
    NgIf,
    NgClass,
    IconComponent
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() requiredIcon: boolean = true;
  @Input() icon: string = 'material-person';
  @Input() style: ButtonStyle = {
    background: '#000',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
    iconSize: '24px',
    padding: '10px 20px',
    margin: '0'
  };
  protected readonly Icon = Icon;
}
