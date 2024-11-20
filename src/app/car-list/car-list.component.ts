import {Component, OnInit} from '@angular/core';
import {CarListItemComponent} from "../car-list-item/car-list-item.component";
import {DatePipe, LowerCasePipe, NgForOf, NgIf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CarService} from "../services/car.service";
import {Cars} from "../Shared/models/cars";
import {carList} from "../Shared/mock-car.data";
import {FormGroup} from "@angular/forms";
import {MakeModelPipe} from "../pipes/make-model.pipe";

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    CarListItemComponent,
    NgForOf,
    RouterLink,
    DatePipe,
    UpperCasePipe,
    NgIf,
    TitleCasePipe,
    MakeModelPipe,
    LowerCasePipe
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})

export class CarListComponent implements OnInit{
  error: string | null = null //Var to hold an error message
  carList: Cars[] = [];


  constructor(

    private router: Router,
    private carService: CarService,
  ){}




  onEdit() {
    this.router.navigate(['/modify-car'])

  }
  delete(id: number) : void{
    this.carList =this.carList.filter(car=>car.id !== id);
  }

  ngOnInit(): void {
    this.carService.getCar().subscribe({
      next: (data: Cars[]) => {
        this.carList = data;
        this.error = null; // Clear any previous errors
      },
      error: err => {
        this.error = 'Error fetching cars'; // Set an error message
        console.error("Error fetching cars", err);
      },
      complete: () => console.log("Cars data fetch complete!")
    });
  }
  selectedCar?: Cars;
  selectCar(car: Cars): void {
    this.selectedCar = car;
  }



}



