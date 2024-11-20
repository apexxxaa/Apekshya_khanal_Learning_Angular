import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

import {NgFor,NgIf} from "@angular/common";
import {CarListComponent} from "./car-list/car-list.component";
import {Cars} from "./Shared/models/cars";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, CarListComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title="CarList";
}
