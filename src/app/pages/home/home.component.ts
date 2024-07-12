import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service';
import { Pet } from '../../models/pet.model';
import { PetCardComponent } from '../pet-card/pet-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PetCardComponent,
    MatIconModule,
    MatSelectModule,
    RouterModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  isLoading = true
  page = 'home'
  filter: string
  pets: Pet[]

  constructor(
    private readonly petService: PetService
  ) {}

  ngOnInit(): void {
    this.pets = this.petService.getPets()
    of(null).pipe(
      delay(1000) // Delay de 3 segundos
    ).subscribe(() => {
      this.isLoading = false; // Después del delay, establecemos isLoading a false
      console.log(this.pets);
    })
  }

  public onChange(filter: string) {
    if (filter == '') {
      this.pets = this.petService.getPets()
      console.log('hola 1')
    }
    else {
      this.pets = this.petService.getPetsFilter(filter)
      console.log('hola 2')
    }
  }

}
