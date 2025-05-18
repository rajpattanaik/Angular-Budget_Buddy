import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todoForm: any;
  selectedMonth: any;
  monthSelected: boolean = false;

  januaryExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1000 },
    { expenseType: 'Light Bills', expenseAmount: 500 },
  ];
  februaryExpense: any[] = [
    { expenseType: 'Essentials', expenseAmount: 200 },
    { expenseType: 'Light Bills', expenseAmount: 400 }
  ];
  marchExpense: any[] = [
    { expenseType: 'Recharge', expenseAmount: 1100 },
    { expenseType: 'Essentials', expenseAmount: 250 }
  ];
  aprilExpense: any[] = [];
  mayExpense: any[] = [];
  juneExpense: any[] = [];
  julyExpense: any[] = [];
  augustExpense: any[] = [];
  septemberExpense: any[] = [];
  octoberExpense: any[] = [];
  novemberExpense: any[] = [];
  decemberExpense: any[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    this.selectedMonth = currentMonth;
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required]
    });
  }

  onSubmitExpense() {
    if (this.todoForm.valid) {
      const newExpense = this.todoForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.januaryExpense.push(newExpense);
          break;
        case 'February':
          this.februaryExpense.push(newExpense);
          break;
        case 'March':
          this.marchExpense.push(newExpense);
          break;
        case 'April':
          this.aprilExpense.push(newExpense);
          break;
        case 'May':
          this.mayExpense.push(newExpense);
          break;
        case 'June':
          this.juneExpense.push(newExpense);
          break;
        case 'July':
          this.julyExpense.push(newExpense);
          break;
        case 'August':
          this.augustExpense.push(newExpense);
          break;
        case 'September':
          this.septemberExpense.push(newExpense);
          break;
        case 'October':
          this.octoberExpense.push(newExpense);
          break;
        case 'November':
          this.novemberExpense.push(newExpense);
          break;
        case 'December':
          this.decemberExpense.push(newExpense);
          break;
        default:
          break;
      }
      this.todoForm.reset();
      this.todoForm.patchValue({ month: '', expenseType: '', expenseAmount: '' });
    }
  }

  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
    this.getFilteredExpenses();
  }

  getFilteredExpenses() {
    switch (this.selectedMonth) {
      case 'January':
        return [...this.januaryExpense];
      case 'February':
        return [...this.februaryExpense];
      case 'March':
        return [...this.marchExpense];
      case 'April':
        return [...this.aprilExpense];
      case 'May':
        return [...this.mayExpense];
      case 'June':
        return [...this.juneExpense];
      case 'July':
        return [...this.julyExpense];
      case 'August':
        return [...this.augustExpense];
      case 'September':
        return [...this.septemberExpense];
      case 'October':
        return [...this.octoberExpense];
      case 'November':
        return [...this.novemberExpense];
      case 'December':
        return [...this.decemberExpense];
      default:
        return [];
    }
  }

  calculateTotalExpense(month: string): number {
    let totalExpense = 0;
    for (const expense of this.gettodoFormonth(month)) {
      totalExpense += Number(expense.expenseAmount);
    }
    return totalExpense;
  }

  gettodoFormonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.januaryExpense;
      case 'February':
        return this.februaryExpense;
      case 'March':
        return this.marchExpense;
      case 'April':
        return this.aprilExpense;
      case 'May':
        return this.mayExpense;
      case 'June':
        return this.juneExpense;
      case 'July':
        return this.julyExpense;
      case 'August':
        return this.augustExpense;
      case 'September':
        return this.septemberExpense;
      case 'October':
        return this.octoberExpense;
      case 'November':
        return this.novemberExpense;
      case 'December':
        return this.decemberExpense;
      default:
        return [];
    }
  }

  onSave() {
    if (this.todoForm.valid) {
      this.todoForm.reset({ month: this.selectedMonth });
      this.getFilteredExpenses();
    }
  }

  saveForm() {
    console.log("Form saved!");
  }

  onBack() {
    this.router.navigate(['/budget-planner/dashboard']);
  }

  toggleSelection(expense: any) {
    expense.selected = !expense.selected;
  }
}
