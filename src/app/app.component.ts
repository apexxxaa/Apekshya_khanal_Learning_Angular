import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Cars} from "./Shared/models/cars";
import {NgFor,NgIf} from "@angular/common";
import {CarListComponent} from "./car-list/car-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, CarListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title ='List of Cars'
  /*
 carList : Cars[]=[{id: 1, make:'Toyota',model:'Camry',year:2020,color:'Red',isFav:true},
   {id:2, make:'Hyundai',model:'Sonata',year:2022,color:'Silver',isFav:true},
   {id:3, make:'Honda',model:'Accord',year:2019,color:'Blue',isFav:true},
   {id:4, make:'Ford',model:'Mustang',year:2021,color:'Black',isFav:false},
   {id:5, make:'Chevrolet',model:'Impala',year:2018,color:'White',isFav:true},
   {id:6, make:'Nissan',model:'Altima',year:2022,color:'Gray',isFav:true}
 ]
  */

}
