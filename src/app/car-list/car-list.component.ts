import { Component } from '@angular/core';
import {CarListItemComponent} from "../car-list-item/car-list-item.component";
import {NgForOf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CarService} from "../services/car.service";
import {Cars} from "../Shared/models/cars";
import {carList} from "../Shared/mock-car.data";

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
    private router : Router,
    private carService: CarService

  ) {}
  cars = [
    {
      imageUrl:"/Assets/car1.jpg",
      id: 1,
      make: 'Tesla',
      model: 'Model S',
      year: 2022,
      color: 'Red',
      isFav: 'No'

    },
    {
      id:2,
      imageUrl:"/Assets/car2.jpg",
      make: 'Ford',
      model: 'Mustang',
      year: 2021,
      color: 'blue',
      isFav: 'No'

    },
    {
      id:3,
      imageUrl:"/Assets/car3.jpg",
      make: 'Chevrolet',
      model: 'camaro',
      year: 2020,
      color: 'Yellow',
      isFav: 'No'
    },
    {
      id:4,
      imageUrl:"/Assets/car.jpg",
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

  selectedCar?: Cars;
  selectCar(car: Cars): void {
    this.selectedCar = car;
  }
  onDelete(): void {
    if (this.selectedCar && this.selectedCar.id) {
      // Call the service to delete the car by its ID
      this.carService.deleteCar(this.selectedCar.id).subscribe(() => {
        // Once the deletion is complete, navigate back to the car list
        this.router.navigate(['/cars']);
      });
    }
  }

  protected readonly carList = carList;
}
