import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule, SideNavComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  todoForm: any;
  selectedMonth: string;
  monthSelected: boolean = false;

  // Predefined expenses for each month
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
    this.selectedMonth = new Date().toLocaleString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      month: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseAmount: ['', Validators.required]
    });
  }

  // Add new transaction
  onSubmitExpense() {
    if (this.todoForm.valid) {
      const newExpense = this.todoForm.value;
      this.getFilteredExpenses().push(newExpense);
      this.todoForm.reset();
    }
  }

  // Handle month change from dropdown
  onChangeExpense(event: any) {
    this.selectedMonth = event.target.value;
    this.monthSelected = true;
  }

  // Fetch expenses list for selected month
  getFilteredExpenses() {
    switch (this.selectedMonth) {
      case 'January': return this.januaryExpense;
      case 'February': return this.februaryExpense;
      case 'March': return this.marchExpense;
      case 'April': return this.aprilExpense;
      case 'May': return this.mayExpense;
      case 'June': return this.juneExpense;
      case 'July': return this.julyExpense;
      case 'August': return this.augustExpense;
      case 'September': return this.septemberExpense;
      case 'October': return this.octoberExpense;
      case 'November': return this.novemberExpense;
      case 'December': return this.decemberExpense;
      default: return [];
    }
  }

  // Calculate total transaction amount for the selected month
  calculateTotalExpense(month: string): number {
    this.selectedMonth = month; // ensure correct month context
    return this.getFilteredExpenses().reduce((acc, curr) => acc + curr.expenseAmount, 0);
  }

  // Save form (dummy function)
  saveForm() {
    console.log("Form saved!");
  }

  // Go back to dashboard
  onBack() {
    this.router.navigate(['/budget-planner/dashboard']);
  }
}
