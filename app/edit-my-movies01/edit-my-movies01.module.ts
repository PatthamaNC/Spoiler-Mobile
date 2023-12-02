import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMyMovies01PageRoutingModule } from './edit-my-movies01-routing.module';

import { EditMyMovies01Page } from './edit-my-movies01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditMyMovies01PageRoutingModule
  ],
  declarations: [EditMyMovies01Page]
})
export class EditMyMovies01PageModule {}
