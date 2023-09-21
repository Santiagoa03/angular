import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output() newCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'ABC',
    power: 0,
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
      this.newCharacter.emit(this.character);

      this.character = {name:'',power:0}
  }
}
