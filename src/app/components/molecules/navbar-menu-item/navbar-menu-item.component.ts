import {Component, Input} from '@angular/core';
import {IconComponent} from "../../atoms/icon/icon.component";
import {Icon} from '../../../core/entitys/components/icon';
import {LinkComponent} from '../../atoms/link/link.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar-menu-item',
  standalone: true,
  imports: [
    IconComponent,
    LinkComponent,
    NgIf
  ],
  templateUrl: './navbar-menu-item.component.html',
  styleUrl: './navbar-menu-item.component.css'
})
export class NavbarMenuItemComponent {
  @Input() text: string = 'Submenu';
  @Input() url: string | null = '/submenu';
  @Input() icon: Icon | undefined = Icon.PERSON;
}
