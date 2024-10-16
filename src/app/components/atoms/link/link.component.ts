import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RoutesAvailable} from '../../../core/entitys/routes';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() url: string | null = RoutesAvailable.ROOT;
  @Input() noLinked: boolean = false;
}
