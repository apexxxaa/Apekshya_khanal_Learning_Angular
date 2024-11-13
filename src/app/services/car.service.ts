import { Injectable } from '@angular/core';
import {Cars} from "../Shared/models/cars";
import {carList} from "../Shared/mock-car.data";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
//import our mock data


//Notice the new Decorator
@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'api/cars'; //url to web api
  private cars: Cars[] = carList;//Local copy of student data for CRUD Operations
  constructor(private http: HttpClient) { }//DI http
  //CRUD operations using HTTP Requests
  //All operations we need are:
  // Get, post, put, delete
  getCar(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getCarById(id: number): Observable<Cars> {
    return this.http.get<Cars>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError)); //return a single student
  }

  addCar(car: Cars): Observable<Cars> {
    car.id = this.generateNewId();
    return this.http.post<Cars>(this.apiUrl, car).pipe(catchError(this.handleError));
  }

  updateCar(car: Cars): Observable<Cars | undefined> {
    const url = `${this.apiUrl}/${car.id}`;
    return this.http.put<Cars>(url, car).pipe(catchError(this.handleError));
  }

  deleteCar(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }
  // New method to generate a new unique ID
  generateNewId(): number {
    return this.cars.length > 0 ? Math.max(...this.cars.map(car => car.id)) + 1 : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
