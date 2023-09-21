import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 1500,
    },
  ];

  /*@Output()
  removeForIndex: EventEmitter<number> = new EventEmitter();*/

  @Output()
  removeForId: EventEmitter<string> = new EventEmitter();

  /*removeCharacter(index: number): void {
    console.log(index);
    this.removeForId.emit(index);

  }*/

  removeCharacterById(id: string | undefined): void {
    if (id === undefined) return;
    this.removeForId.emit(id);
  }
}
