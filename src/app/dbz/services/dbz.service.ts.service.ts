import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  newCharacter(newCharacter: Character): void {
    const newCharacterWId: Character = {
      ...newCharacter,
      id: uuid(),
    };
    this.characters.push(newCharacterWId);
  }

  // removeCharacterByIndex(index: number): void {
  // this.characters.splice(index, 1);
  // }
  deleteCharacterById(id: string) {
    console.log(id);
    this.characters = this.characters.filter((f) => f.id !== id);
  }
}
