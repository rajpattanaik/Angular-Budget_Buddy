import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  activeForm: 'login' | 'register' = 'login';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }

  login() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      // Simulating a simple login check with localStorage (for demo purpose)
      const storedUser = JSON.parse(localStorage.getItem('userData') || '{}');

      if (
        storedUser.email === loginData.email &&
        storedUser.password === loginData.password
      ) {
        this.snackBar.open('Login successful!', 'Close', { duration: 2000 });
        this.router.navigate(['/budget-planner/dashboard']);
      } else {
        this.snackBar.open('Invalid credentials!', 'Close', { duration: 3000 });
      }
    } else {
      this.snackBar.open('Invalid email or password!', 'Close', { duration: 3000 });
    }
  }

  register() {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      console.log('Register info ==>>', registerData);

      // Save user data to localStorage (as demo)
      localStorage.setItem('userData', JSON.stringify(registerData));

      this.snackBar.open('Registration successful!', 'Close', { duration: 2000 });

      // Switch back to login form
      setTimeout(() => {
        this.toggleForm('login');
      }, 2000);
    } else {
      this.snackBar.open('Please fill in all fields correctly!', 'Close', { duration: 3000 });
    }
  }
}
