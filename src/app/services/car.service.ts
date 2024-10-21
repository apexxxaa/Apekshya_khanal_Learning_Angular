import { Injectable } from '@angular/core';
import {Cars} from "../Shared/models/cars";
import {Observable, of} from "rxjs";
import {carList} from "../Shared/mock-car.data";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars : Cars[] = carList;

  constructor() { }
  //returns all cars
  getCars() :Observable<Cars[]>{
    return of(carList);
  }
  addCars(newCar:Cars) : Observable<Cars[]>{
    this.cars.push(newCar)
    return of(this.cars);
  }

  updateCars(updateCars: Cars): Observable<Cars[]>{
    const index = this.cars.findIndex(car => car.id ===updateCars.id);
    if(index !== -1){
      this.cars[index] = updateCars;
    }
    return of(this.cars);
  }

  deleteStudent(carId: number): Observable<Cars[]> {
    this.cars = this.cars.filter(car => car.id !== carId);
    return of(this.cars);
  }

  getCarsById(carsId:number): Observable<Cars |undefined>{
    const car =this.cars.find(car =>car.id === carsId);
    return of(car);
  }



}
