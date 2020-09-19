import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from '../../shared/model/item-form.model';

@Component({
  selector: 'app-budget-list-item',
  templateUrl: './budget-list-item.component.html',
  styleUrls: ['./budget-list-item.component.scss']
})
export class BudgetListItemComponent implements OnInit {

  @Input() item: BudgetItem = {
    description: '',
    amount: null
  };
  @Output() itemDelete = new EventEmitter<any>();
  @Output() cardClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.itemDelete.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }
}
