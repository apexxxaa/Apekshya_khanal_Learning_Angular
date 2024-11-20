import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {CarListComponent} from "./app/car-list/car-list.component";
import {CarListItemComponent} from "./app/car-list-item/car-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyCarComponent} from "./app/modify-car/modify-car.component";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {importProvidersFrom} from "@angular/core";
import {provideHttpClient} from "@angular/common/http";
import {InMemoryDataService} from "./app/services/in-memory-data.service";


const routes: Routes =[
  {path:'', redirectTo: '/cars',pathMatch:'full'},
  {path:'cars', component:CarListComponent},
  {path:'cars/:id', component:CarListItemComponent},
  {path:'modify-car',component:ModifyCarComponent},

  {path:'**', component:PageNotFoundComponent},

];


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1 })) // Import providers dynamically
  ],
}).catch((err) => console.error(err));
