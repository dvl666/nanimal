import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PetProfileComponent } from './pages/pet-profile/pet-profile.component';
import { RescueComponent } from './pages/rescue/rescue.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
        
    },
    {
        path: 'pet/:id',
        title: '1',
        component: PetProfileComponent
    },
    {
        path: 'rescued',
        title: 'Rescatados',
        component: RescueComponent
    },
    {
        path: 'user_profile',
        title: 'Perfil de usuario',
        component: UserProfileComponent
    }
];
