import {Component, OnInit} from '@angular/core';
import {CarListItemComponent} from "../car-list-item/car-list-item.component";
import {NgForOf} from "@angular/common";
import {CarService} from "../services/car.service";
import {Cars} from "../Shared/models/cars";

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
export class CarListComponent implements OnInit{

  displayColumns:string[] =['id','make','model','year','color','isFav'];
  carList : Cars[] = []
  constructor(private carServices : CarService) {
  }

  ngOnInit(){
    this.carServices.getCars().subscribe({
      next: (data: Cars[])=> this.carList = data,
      error:err => console.error("Error fetching books", err),
      complete:()=> console.log("Student fetch data complete!")
    })
  }

  selectedCar?: Cars;
  selectCar(car: Cars):void {
    this.selectedCar = car;
  }
}
