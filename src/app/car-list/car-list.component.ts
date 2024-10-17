import { Component } from '@angular/core';
import {CarListItemComponent} from "../car-list-item/car-list-item.component";
import {NgForOf} from "@angular/common";

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
export class CarListComponent {

}
