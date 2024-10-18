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
  getCars() :Observable<Cars[]>{
    return of(carList);
  }


}
