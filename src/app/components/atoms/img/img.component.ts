import {Component, Input} from '@angular/core';
import {FilterSVG} from '../../../core/entitys/components/img';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css'
})
export class ImgComponent {
  @Input() src: string = 'img/chicks-logo-large.svg';
  @Input() alt: string = '';
  @Input() width: string = '100%';
  @Input() height: string = 'auto';
  @Input() filterSVG: FilterSVG = FilterSVG.NONE;
  @Input() margin: string = '0';

  getFilterClass(): string {
    return `filter-${this.filterSVG.toLowerCase()}`;
  }
}

