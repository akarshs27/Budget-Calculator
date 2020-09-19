import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BudgetItem } from '../shared/model/item-form.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  constructor( private fb: FormBuilder) { }

  // @Input() item: BudgetItem = {
  //   description: '',
  //   amount: null,
  // };

  isNewItem: boolean;

  @Input() item: BudgetItem;

  @Output() formSubmit = new EventEmitter<BudgetItem>();

  itemForm = this.fb.group({
    description: ['', Validators.required],
    amount: ['', Validators.required]
  });

  ngOnInit(): void {
    if (this.item) {
      this.itemForm.patchValue({
        description: this.item.description,
        amount: this.item.amount,
      });
      this.isNewItem = false;
    }
    else {
      this.isNewItem = true;
    }
  }

  submit() {
    console.log(this.itemForm.value);
    this.formSubmit.emit(this.itemForm.value);
    this.itemForm.reset();
    }
}
