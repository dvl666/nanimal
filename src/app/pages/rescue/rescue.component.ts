import { Component } from '@angular/core';
import { PetCardComponent } from '../pet-card/pet-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-rescue',
  standalone: true,
  imports: [
    PetCardComponent,
    MatIconModule,
    MatSelectModule,
    RouterModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './rescue.component.html',
  styleUrl: './rescue.component.scss'
})
export class RescueComponent {

  isLoading = true
  filter: string
  pets: Pet[]

  constructor(
    private readonly petService: PetService
  ) {}
  
  ngOnInit(): void {
    this.pets = this.petService.getPetsRescuedFilter()
    of(null).pipe(
      delay(1000) // Delay de 3 segundos
    ).subscribe(() => {
      this.isLoading = false; // Después del delay, establecemos isLoading a false
      console.log(this.pets);
    })
    console.log(this.pets)
  }

  public onChange(filter: string) {
    this.pets = this.petService.getPetsRescuedFilter()
    if (filter == '') {
      this.pets = this.petService.getPetsRescuedFilter()
      console.log('hola 1')
    }
    else {
      this.pets = this.petService.getPetsFilter2(this.pets, filter)
      console.log('hola 2')
    }
  }

}
