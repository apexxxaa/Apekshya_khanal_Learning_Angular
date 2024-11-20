import { Pipe, PipeTransform } from '@angular/core';
import {Cars} from "../Shared/models/cars";

@Pipe({
  name: 'makeModel',
  standalone: true
})
export class MakeModelPipe implements PipeTransform {

  transform(cars: Cars): string {
    return `${cars.make} ${cars.model}` ;
  }

}
