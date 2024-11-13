import { Component } from '@angular/core';
import {CarListItemComponent} from "../car-list-item/car-list-item.component";
import {NgForOf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CarService} from "../services/car.service";
import {Cars} from "../Shared/models/cars";
import {carList} from "../Shared/mock-car.data";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    CarListItemComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})

export class CarListComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService
  ) {
  }

  cars = [
    {
      imageUrl: "/Assets/car1.jpg",
      id: 1,
      make: 'Tesla',
      model: 'Model S',
      year: 2022,
      color: 'Red',
      isFav: 'No'

    },
    {
      id: 2,
      imageUrl: "/Assets/car2.jpg",
      make: 'Ford',
      model: 'Mustang',
      year: 2021,
      color: 'blue',
      isFav: 'No'

    },
    {
      id: 3,
      imageUrl: "/Assets/car3.jpg",
      make: 'Chevrolet',
      model: 'camaro',
      year: 2020,
      color: 'Yellow',
      isFav: 'No'
    },
    {
      id: 4,
      imageUrl: "/Assets/car.jpg",
      make: 'Honda',
      model: 'civic',
      year: 2019,
      color: 'black',
      isFav: 'yes'
    }
  ];


  onEdit() {
    this.router.navigate(['/modify-car'])

  }
  delete(id: number) : void{
    this.cars =this.cars.filter(car=>car.id !== id);
  }
}



