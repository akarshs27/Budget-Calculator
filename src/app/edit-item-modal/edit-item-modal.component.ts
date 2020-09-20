import { Component, OnInit, Input, Inject } from '@angular/core';
import { BudgetItem } from '../shared/model/item-form.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  // @Input() item: BudgetItem;
  constructor(
    public dialogRef: MatDialogRef<EditItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BudgetItem
    ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onSubmit(updatedItem: BudgetItem) {
    console.log('close outside');
    this.dialogRef.close(updatedItem);
  }
}
