import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Cars} from "../Shared/models/cars";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../services/car.service";

@Component({
  selector: 'app-modify-car',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-car.component.html',
  styleUrl: './modify-car.component.css'
})
export class ModifyCarComponent implements OnInit {
  carForm: FormGroup;
  car: Cars | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {
    this.carForm = this.fb.group({
      id: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: [''],
      isFav: [false]
    });
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carService.getCarsById(+id).subscribe(car => {
        if(car) {
          this.car = car;

          this.carForm.patchValue(car);
        }
      });
    }
  }

  onSubmit(): void {
    const car: Cars = this.carForm.value;

    // Check if we're updating an existing car
    if (car.id) {
      this.carService.updateCars(car);
    } else {
      // For adding a new car, generate a new ID
      const newId = this.carService.generateNewId(); // This method will create a new ID
      car.id = newId;
      this.carService.addCars(car);
    }
    }


  onDelete() {
    const id = this.carForm.get('id')?.value;
    if (id) {
      this.carService.deleteCar(id);
      this.router.navigate(['/car']);
    }
  }

  navigateToCarList(): void{
    this.router.navigate(['/car']);
  }

  protected readonly onsubmit = onsubmit;
}
