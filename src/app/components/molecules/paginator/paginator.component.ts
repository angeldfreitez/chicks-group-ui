import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from '@angular/common';
import {IconComponent} from '../../atoms/icon/icon.component';
import {Icon} from '../../../core/entitys/components/icon';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [
    NgForOf,
    IconComponent
  ],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  @Input() totalPages: number = 10;  // Número total de páginas
  @Input() currentPage: number = 1; // Página actual
  @Output() pageChange = new EventEmitter<number>(); // Emite el evento cuando cambia la página

  get pages(): (number | string)[] {
    const pages: (number | string)[] = [];

    // Siempre mostrar la primera y segunda página
    pages.push(1);
    if (this.totalPages > 1) {
      pages.push(2);
    }

    // Si la página actual es mayor que 4, agregar "..."
    if (this.currentPage > 4) {
      pages.push('...');
    }

    // Mostrar la página seleccionada si está lejos del inicio y fin
    if (this.currentPage > 2 && this.currentPage < this.totalPages - 1) {
      pages.push(this.currentPage);
    }

    // Si la página actual está lejos del final, agregar "..."
    if (this.currentPage < this.totalPages - 3) {
      pages.push('...');
    }

    // Siempre mostrar las dos últimas páginas
    if (this.totalPages > 1) {
      pages.push(this.totalPages - 1);
      pages.push(this.totalPages);
    }

    return pages;
  }


  onPageChange(page: number | string) {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.onPageChange(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.onPageChange(this.currentPage - 1);
    }
  }

  protected readonly Icon = Icon;
}
