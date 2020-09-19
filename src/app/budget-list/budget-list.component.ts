import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from '../shared/model/item-form.model';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import {MatDialog} from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {

  @Input() budgetItem: BudgetItem[];
  @Output() deleteItem =  new EventEmitter<BudgetItem>();
  @Output() updatedItem = new EventEmitter<any>();

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDelete(item: BudgetItem) {
    this.deleteItem.emit(item);
  }

  openModal(item: BudgetItem) {
    let dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '35rem',
      data: item,
    });

    const originalVal = item;

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, originalVal);
      if (result) {
        console.log("going in if condition");
        this.budgetItem[this.budgetItem.indexOf(item)] = result;
        this.updatedItem.emit({
          updatedVal: result,
          originalVal
        });
      }
    });
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
