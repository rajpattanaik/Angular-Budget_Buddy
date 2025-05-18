import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SideNavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  lastMonthIncome = ['January: ₹1000', 'February: ₹1500', 'March: ₹1200'];
  currentMonthIncome = '₹3000';

  lastMonthExpense = ['January: ₹700', 'February: ₹1100', 'March: ₹900'];
  currentMonthExpense = '₹1800';


  //Todo Trans
todoTransactions=[
{description:'Pay electricity bill'},
{description:'Submit monthly report'},
{description:'Buy groceries'},

{description:'Call insurance company'},


  { "description": "Pay electricity bill" },
  { "description": "Submit monthly report" },
  { "description": "Buy groceries" },
  { "description": "Schedule doctor appointment" },
  { "description": "Call plumber for leak repair" },
  { "description": "Prepare presentation slides" },
  { "description": "Renew car insurance" },
  { "description": "Book flight tickets" },
  { "description": "Clean the house" },
  { "description": "Plan weekend outing" }
]


totalCurrentMonthIncome=2000;
totalCurrentMonthExpense=1500;




  constructor(public router: Router) {}

  onIncome() {
    this.router.navigate(['/budget-planner/income']);
  }

  onExpense() {
    this.router.navigate(['/budget-planner/expense']);
  }
  onTodo(){
    this.router.navigate(['budget-planner/todo']);
  }

  get currentMonthSavings():number{
    return this.totalCurrentMonthIncome- this.totalCurrentMonthExpense;
  }
}
