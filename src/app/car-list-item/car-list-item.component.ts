import {Component, input, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";

import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../services/car.service";
import {Cars} from "../Shared/models/cars";

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './car-list-item.component.html',
  styleUrl: './car-list-item.component.css'
})
export class CarListItemComponent implements OnInit{
  car : Cars | undefined;
  carList: Cars[] = [];
  currentIndex: number =0;
  error: string|null = null;//to store any errors


  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.carService.getCar().subscribe({
      next: (car: Cars[]) => {
        this.carList = car;
        this.error = null; // Clear any previous errors

        // Subscribe to paramMap changes to update the page view
        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.carList.findIndex(car => car.id === id);
            this.car = this.carList[this.currentIndex];
          }
        });
      },
      error: (err) => {
        this.error = 'Error fetching cars';
        console.error('Error fetching cars:', err);
      }
    });
  }



//function to go back to student-list view
  goBack(): void {
    this.router.navigate(['/cars']);
  }

//function to move foward through array with overflow protection
  goForward(): void {
    if (this.currentIndex < this.carList.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/cars', this.carList[this.currentIndex].id]);
    }
  }
//function to move backward through array with overflow protection
  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/cars', this.carList[this.currentIndex].id]);
    }
  }



}
