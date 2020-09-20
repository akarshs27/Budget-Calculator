import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents]
})
export class MaterialModule { }
