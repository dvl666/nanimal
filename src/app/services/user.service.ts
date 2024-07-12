import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user:any = {
    name: 'Gaspar Kamann',
    phoneNumber: 966299630,
    mail: 'gaspar.kamann@gmail.com',
    city: 'Quilpue',
  }

  public getUser(){
    return this.user
  }

}
