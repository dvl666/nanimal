import { Injectable } from '@angular/core';
import { Pet } from '../models/pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  pets: Pet[] = [
    {
      id: '1',
      description: 'Milo es un gatito atigrado de color gris. Tiene una personalidad curiosa y aventurera. Le encanta explorar todos los rincones de la casa y jugar con sus juguetes. Milo es sociable y se lleva bien con otros gatos y perros.',
      name: 'Milo',
      type: 'cat',
      imageUrl: 'https://i.pinimg.com/736x/04/87/ed/0487edfdd1bcaca21045f63bd5edc2a3.jpg',
      contactNumber: 966299630,
      pubBy: 'Agustin Correa',
      gender: 'macho',
      rescued: true,
      shelter: 'Refugio patitas'
    },
    {
      id: '2',
      description: 'Luna es una gatita blanca con manchas negras. Tiene los ojos verdes como esmeraldas y un corazón lleno de amor. Es juguetona y le encanta perseguir plumas. Luna es muy cariñosa y siempre busca acurrucarse contigo en el sofá.',
      name: 'Luna',
      type: 'cat',
      imageUrl: 'https://i.pinimg.com/564x/a4/bd/07/a4bd07fdfb0504ba381bec5fd867e82c.jpg',
      contactNumber: 966299630,
      pubBy: 'Milena Eluani',
      gender: 'hembra'
    },
    {
      id: '3',
      description: 'Fizz es un gatito negro con un pelaje suave y brillante. Es muy enérgico y le encanta jugar con pelotas y ratoncitos de juguete. Simba es muy afectuoso y siempre está buscando atención y mimos. Es perfecto para una familia activa que quiera un compañero juguetón.',
      name: 'Fizz',
      type: 'cat',
      imageUrl: 'https://i.pinimg.com/564x/11/46/85/114685062a8b34b8b72fda6c6979c5c4.jpg',
      contactNumber: 966299630,
      pubBy: 'Gaspar Kamann',
      gender: 'macho',
      medDetails: 'hola',
    },
    {
      id: '4',
      description: 'Bella es una gatita siamesa con ojos azul intenso. Es muy inteligente y le gusta resolver puzzles de gatos y juegos interactivos. Bella es muy vocal y le encanta "hablar" contigo. Es ideal para alguien que quiera un gato con mucha personalidad y carácter.',
      name: 'bella',
      type: 'cat',
      imageUrl: 'https://i.pinimg.com/564x/05/04/f2/0504f20e1c571b659c28b3ecb947104c.jpg',
      contactNumber: 966299630,
      pubBy: 'Gaspar Kamann',
      gender: 'hembra',
    },
    {
      id: '5',
      description: 'Max es un perro pastor alemán con mucha energía y amor para dar. Es muy leal y protector. Ideal para una familia que disfrute de actividades al aire libre.',
      name: 'Max',
      type: 'dog',
      imageUrl: 'https://i.pinimg.com/736x/5d/0e/27/5d0e275354ffb36eb5c857361098bbc2.jpg',
      contactNumber: 777777777,
      pubBy: 'Laura Martin',
      gender: 'macho',
      rescued: true,
      shelter: 'Refugio patitas'
    },
    {
      id: '6',
      description: 'Coco es una perrita chihuahua muy tierna y cariñosa. Le encanta estar en brazos y es muy fiel. Perfecta para alguien que viva en un apartamento.',
      name: 'Coco',
      type: 'dog',
      imageUrl: 'https://i.pinimg.com/564x/6f/08/c6/6f08c6411dda4b4f085ff8f1b3dbc750.jpg',
      contactNumber: 777777777,
      pubBy: 'Laura Martin',
      gender: 'hembra'
    },
    {
      id: '7',
      description: 'Rocky es un perro boxer muy juguetón y enérgico. Le encanta correr y jugar a la pelota. Es perfecto para una familia activa.',
      name: 'Rocky',
      type: 'dog',
      imageUrl: 'https://i.pinimg.com/564x/0e/c6/c9/0ec6c93e40e2b14a79b15ae76955f13b.jpg',
      contactNumber: 888888888,
      pubBy: 'Carlos Lopez',
      gender: 'macho',
      rescued: true,
      shelter: 'Refugio patitas'
    },
    {
      id: '8',
      description: 'Lola es una perrita golden retriever muy amigable y cariñosa. Le encanta estar con la gente y es muy sociable con otros perros.',
      name: 'Lola',
      type: 'dog',
      imageUrl: 'https://i.pinimg.com/564x/3e/8a/62/3e8a6247a47d26c206ba0725c68f9ec9.jpg',
      contactNumber: 888888888,
      pubBy: 'Carlos Lopez',
      gender: 'hembra'
    },
    {
      id: '9',
      description: 'Toby es un perro beagle muy curioso y lleno de energía. Le encanta seguir rastros y explorar nuevos lugares.',
      name: 'Toby',
      type: 'dog',
      imageUrl: 'https://i.pinimg.com/564x/0a/dd/d8/0addd8c06787372933fd7a0027a22202.jpg',
      contactNumber: 999999999,
      pubBy: 'Ana Garcia',
      gender: 'macho',
      rescued: true,
      shelter: 'Refugio patitas'
    },
    {
      id: '10',
      description: 'Nina es una perrita poodle muy inteligente y fácil de entrenar. Le encanta aprender trucos nuevos y es muy obediente.',
      name: 'Nina',
      type: 'dog',
      imageUrl: 'https://i.pinimg.com/564x/b7/37/24/b737244401faa3861cc31398dcec07cb.jpg',
      contactNumber: 999999999,
      pubBy: 'Ana Garcia',
      gender: 'hembra',
      rescued: true,
      shelter: 'Refugio patitas'
    },
    {
      id: '11',
      description: 'Oscar es un gatito de raza Maine Coon con un pelaje largo y esponjoso. Es muy tranquilo y le encanta descansar en lugares altos.',
      name: 'Oscar',
      type: 'cat',
      imageUrl: 'https://i.pinimg.com/564x/a4/4e/15/a44e15afd471365f0640c213c7c69ce3.jpg',
      contactNumber: 945427783,
      pubBy: 'Maria Isabel',
      gender: 'macho',
      rescued: true,
      shelter: 'Refugio patitas'
    },
    {
      id: '12',
      description: 'Mimi es una gatita de raza Bengal con un patrón de manchas hermoso. Es muy activa y le encanta trepar y jugar.',
      name: 'Mimi',
      type: 'cat',
      imageUrl: 'https://i.pinimg.com/564x/21/d2/f8/21d2f841bd0d941c7626a1a50bf73fd1.jpg',
      contactNumber: 966299630,
      pubBy: 'Gaspar Kamann',
      gender: 'hembra'
    },
    {
      id: '13',
      description: 'Zeus es un perro labrador muy amistoso y leal. Le encanta nadar y es muy buen compañero para actividades al aire libre.',
      name: 'Zeus',
      type: 'dog',
      imageUrl: 'https://i.pinimg.com/564x/37/d0/67/37d067c4f93333c8fba5f6a92569e8b5.jpg',
      contactNumber: 555555555,
      pubBy: 'Elena Ruiz',
      gender: 'macho'
    },
    {
      id: '14',
      description: 'Daisy es una perrita cocker spaniel muy cariñosa y juguetona. Le encanta correr en el parque y jugar con otros perros.',
      name: 'Daisy',
      type: 'dog',
      imageUrl: 'https://i.pinimg.com/736x/20/e3/67/20e36721d3774d2892c709d2bcd3b236.jpg',
      contactNumber: 555555555,
      pubBy: 'Elena Ruiz',
      gender: 'hembra'
    },
    {
      id: '15',
      description: 'Rex es un perro doberman muy protector y leal. Es muy activo y necesita mucho ejercicio.',
      name: 'Rex',
      type: 'dog',
      imageUrl: 'https://i.pinimg.com/736x/36/ce/ef/36ceeffeb673214e7ec4a9fa59d57dd2.jpg',
      contactNumber: 444444444,
      pubBy: 'Juan Martinez',
      gender: 'macho',
      rescued: true,
      shelter: 'Refugio patitas'
    }
  ]

  constructor() { }

  public getPets() {
    return this.pets;
  }

  getPetsFilter(filter: string): Pet[] {
    return this.pets.filter(pet => pet.type === filter)
  }

  public getPetById(id: string): Pet {
    return this.pets.find(pet => pet.id === id)
  }

  public getPetsRescuedFilter(): Pet[]{
    return this.pets.filter(pet => pet.rescued === true)
  }

  getPetsFilter2(pets: Pet[], filter: string): Pet[] {
    return pets.filter(pet => pet.type === filter)
  }

  getPetsFilterByOwner(pubBy: string): Pet[] {
    return this.pets.filter(pet => pet.pubBy === pubBy )
  }

}
