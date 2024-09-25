import { Component } from '@angular/core';
import {CarListItemComponent} from "../car-list-item/car-list-item.component";

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    CarListItemComponent
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  cars = [
    {
      make: 'Tesla',
      model: 'Model S',
      year: 2022,
      color: 'Red'
    },
    {
      make: 'Ford',
      model: 'Mustang',
      year: 2021,
      color: 'blue'

    },
    {
      make: 'Chevrolet',
      model: 'camaro',
      year: 2020,
      color: 'Yellow'
    },
    {
      make: 'Honda',
      model: 'civic',
      year: 2019,
      color: 'black'
    }
  ];
}
