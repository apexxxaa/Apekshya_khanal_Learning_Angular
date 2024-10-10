import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";
import {Cars} from "../models/cars";

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './car-list-item.component.html',
  styleUrl: './car-list-item.component.css'
})
export class CarListItemComponent {
  @Input() car?: Cars;
}
