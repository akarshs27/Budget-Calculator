import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetListItemComponent } from './budget-list/budget-list-item/budget-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent,
    AddItemFormComponent,
    BudgetListComponent,
    BudgetListItemComponent,
    EditItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
