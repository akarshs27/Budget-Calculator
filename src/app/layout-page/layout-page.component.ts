import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../shared/model/item-form.model';
import { BudgetService } from '../shared/services/budget.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent implements OnInit {

  budgetItem: BudgetItem[] = [];

  totalBudget: number;
  constructor(
    private budgetService: BudgetService
  ) { }

  ngOnInit(): void {
    this.totalBudget = this.budgetService.totalBudget;
  }

  addItem(newItem: BudgetItem) {
    this.budgetItem.push(newItem);
    // this.totalBudget += newItem.amount;
    this.budgetService.getAdded(newItem.amount);
    this.totalBudget = this.budgetService.totalBudget;
  }

  delete(item: BudgetItem) {
    let index = this.budgetItem.indexOf(item);
    this.budgetItem.splice(index, 1);
    // this.totalBudget -= item.amount;
    this.budgetService.getDelete(item.amount);
    this.totalBudget = this.budgetService.totalBudget;

  }

  amountChanges(values: any){
    console.log("In amount changes");
    console.log(values.updatedVal);
    // this.totalBudget += updatedValues.amount;
    this.budgetService.getChangedValues(values.updatedVal.amount, values.originalVal.amount);
    this.totalBudget = this.budgetService.totalBudget;

  }
}
