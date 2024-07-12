import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PetService } from '../../services/pet.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-pet-profile',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    CommonModule
  ],
  templateUrl: './pet-profile.component.html',
  styleUrl: './pet-profile.component.scss'
})
export class PetProfileComponent implements OnInit {

  petId: string
  pet: Pet

  constructor(
    private readonly activeRouter: ActivatedRoute,
    private readonly petService: PetService
  ) {
    this.activeRouter.params.subscribe(
      params => {
        this.petId = params['id'];
        this.pet = this.petService.getPetById(this.petId)
      }
    )
  }

 ngOnInit(): void {
   console.log(this.pet)
 }

}
