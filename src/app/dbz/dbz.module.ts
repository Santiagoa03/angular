import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'



import { MainPage } from './pages/main-page.component';
import { ListComponent } from './componentes/list/list.component';
import { AddCharacterComponent } from './componentes/add-character/add-character.component'

@NgModule({
  declarations: [MainPage, ListComponent, AddCharacterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MainPage]
})
export class DbzModule { }
