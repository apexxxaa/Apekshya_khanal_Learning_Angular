import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Cars} from "../Shared/models/cars";


export class InMemoryDataService implements InMemoryDbService {
  //returns an object with a students property,
  // which is an array of User objects
  createDb():{cars: Cars[]} {
    /*
    Inside the method, a constant array named students is defined,
    containing several User objects. Each User object represents a
    student with properties such as id, firstName, lastName,
     department, and isAdmin. For example, one of the User objects is
     */

    const cars: Cars[] = [
      {
        imageUrl: "/Assets/car1.jpg",
        id: 1,
        make: 'Tesla',
        model: 'Model S',
        year: 2022,
        color: 'Red',
        isFav: true

      },
      {
        id: 2,
        imageUrl: "/Assets/car2.jpg",
        make: 'Ford',
        model: 'Mustang',
        year: 2021,
        color: 'blue',
        isFav: false

      },
      {
        id: 3,
        imageUrl: "/Assets/car3.jpg",
        make: 'Chevrolet',
        model: 'camaro',
        year: 2020,
        color: 'Yellow',
        isFav: true
      },
      {
        id: 4,
        imageUrl: "/Assets/car.jpg",
        make: 'Honda',
        model: 'civic',
        year: 2019,
        color: 'black',
        isFav: true
      }
    ];
    return { cars };
  }
}
