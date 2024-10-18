import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-trustpillot',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './trustpilot.component.html',
  styleUrl: './trustpilot.component.css'
})
export class TrustpilotComponent {
  @Input() rating: number = 4.5;
  fullStars: number[] = [];
  emptyStars: number[] = [];
  hasHalfStar: boolean = false;

  ngOnInit(): void {
    const fullStarsCount = Math.floor(this.rating);
    this.fullStars = Array(fullStarsCount).fill(0);

    const hasHalf = this.rating % 1 >= 0.5;
    this.hasHalfStar = hasHalf;

    const emptyStarsCount = 5 - fullStarsCount - (hasHalf ? 1 : 0);
    this.emptyStars = Array(emptyStarsCount).fill(0);
  }
}
