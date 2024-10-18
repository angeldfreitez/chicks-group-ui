import {Component, Input} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {MenuSection} from '../../../core/entitys/components/collapse-menu';

@Component({
  selector: 'app-collapsible-menu',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgForOf
  ],
  templateUrl: './collapsible-menu.component.html',
  styleUrl: './collapsible-menu.component.css'
})
export class CollapsibleMenuComponent {
  @Input() menuSections: MenuSection[] = [
    {
      title: 'Chicks Gold',
      items: [
        {
          title: 'About Us',
          link: '/'
        },
        {
          title: 'Blog',
          link: '/'
        },
        {
          title: 'Careers',
          link: '/'
        },
        {
          title: 'Press',
          link: '/'
        },
        {
          title: 'Contact Us',
          link: '/'
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          title: 'About Us',
          link: '/'
        },
        {
          title: 'Blog',
          link: '/'
        },
        {
          title: 'Careers',
          link: '/'
        },
        {
          title: 'Press',
          link: '/'
        },
        {
          title: 'Contact Us',
          link: '/'
        }
      ]
    },
  ];

  sectionsState: { [key: string]: boolean } = {};

  toggleSection(section: string) {
    this.sectionsState[section] = !this.sectionsState[section];
  }
}
