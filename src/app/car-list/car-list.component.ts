import { Component } from '@angular/core';
import {CarListItemComponent} from "../car-list-item/car-list-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    CarListItemComponent,
    NgForOf
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  cars = [
    {
      imageUrl:"/Assets/car1.jpg",
      make: 'Tesla',
      model: 'Model S',
      year: 2022,
      color: 'Red'

    },
    {
      imageUrl:"/Assets/car2.jpg",
      make: 'Ford',
      model: 'Mustang',
      year: 2021,
      color: 'blue'

    },
    {
      imageUrl:"/Assets/car3.jpg",
      make: 'Chevrolet',
      model: 'camaro',
      year: 2020,
      color: 'Yellow'
    },
    {
      imageUrl:"/Assets/car.jpg",
      make: 'Honda',
      model: 'civic',
      year: 2019,
      color: 'black'
    }
  ];
}
