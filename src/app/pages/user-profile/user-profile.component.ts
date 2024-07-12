import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { UserService } from '../../services/user.service';
import { RouterModule } from '@angular/router';
import { Pet } from '../../models/pet.model';
import { PetService } from '../../services/pet.service';
import { PetCardComponent } from '../pet-card/pet-card.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    MatCardModule,
    MatIcon,
    RouterModule,
    PetCardComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {

  isLoading = true
  user:any
  pets: Pet[]
  page = 'hola'

  constructor(
    private readonly userService: UserService,
    private readonly petsService: PetService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.user
    console.log(this.user)
    this.pets = this.petsService.getPetsFilterByOwner(this.user.name)
    of(null).pipe(
      delay(1000) // Delay de 3 segundos
    ).subscribe(() => {
      this.isLoading = false; // Después del delay, establecemos isLoading a false
      console.log(this.pets);
    })
  }

}
