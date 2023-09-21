import { DbzService } from './../services/dbz.service.ts.service';
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPage {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  deleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  newCharacter(characters: Character): void {
    this.dbzService.newCharacter(characters);
  }
}
