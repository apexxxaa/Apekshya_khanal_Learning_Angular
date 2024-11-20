import {Cars} from "./models/cars";


export const carList :Cars[] =
   [

  {
    imageUrl: "/Assets/car1.jpg",
    id: 1,
    make: 'Tesla',
    model: 'Model S',
    year: 2022,
    engineType: 'Electric',
    color: 'Red',
    isFav: true

  },
  {
    id: 2,
    imageUrl: "/Assets/car2.jpg",
    make: 'Ford',
    model: 'Mustang',
    year: 2021,
    engineType: 'L-4 Cylinder',

    color: 'blue',
    isFav: false

  },
  {
    id: 3,
    imageUrl: "/Assets/car3.jpg",
    make: 'Chevrolet',
    model: 'camaro',
    year: 2020,
    engineType: '6.2 L V8',

    color: 'Yellow',
    isFav: true
  },
  {
    id: 4,
    imageUrl: "/Assets/car.jpg",
    make: 'Honda',
    model: 'civic',
    year: 2019,
    engineType: '2.0 L 4-cylinder',

    color: 'black',
    isFav: true
  }
];


