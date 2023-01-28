import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/_core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  showServerError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      checkPassword: [null, [Validators.required, Validators.minLength(6)]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
    });
  }
  
  toLogin() {
    this.router.navigate(['auth']);
  }
  register(): void {
    if (this.registerForm.invalid) return;
    const payload = {
      email: this.email.value,
      password: this.password.value,
      checkPassword: this.checkPassword.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
    };
    this.authService.register(payload).subscribe({
      next: (res) => {
        window.sessionStorage['token'] = res.token;
        this.router.navigate(['dashboard']);
      },
      error: () => {
        this.showServerError = true;
      },
    });
  }

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
  get checkPassword(): FormControl {
    return this.registerForm.get('checkPassword') as FormControl;
  }
  get firstName(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }
}
