import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  totalBudget: number= 0;
  constructor() { }

  getBudget() {
    return this.totalBudget;
  }

  getAdded(addedAmount) {
    this.totalBudget += addedAmount;
  }

  getDelete(deletedAmount) {
    this.totalBudget -= deletedAmount;
  }

  getChangedValues(changedAmount, originalAmount) {
    this.totalBudget += changedAmount - originalAmount;
  }
}
