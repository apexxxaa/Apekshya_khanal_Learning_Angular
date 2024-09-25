import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [],
  templateUrl: './car-list-item.component.html',
  styleUrl: './car-list-item.component.css'
})
export class CarListItemComponent {
  @Input() car: {
    make: string;
    model: string;
    year: number;
    color: string;
  } | undefined
}
