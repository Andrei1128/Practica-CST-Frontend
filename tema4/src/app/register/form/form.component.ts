import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  validateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService:AuthService
  ) {this.validateForm = new FormGroup({});}

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required,Validators.minLength(8),this.passwordValidator]],
      phone:[null,[Validators.required,this.validatePhoneNumber]],
      birthday: [null, [Validators.required, this.validateAge]]
    });
  }

  validatePhoneNumber(control: FormControl): {[key: string]: any} | null {
    const validPhoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(control.value);
    return validPhoneNumber ? null : { 'invalidPhoneNumber': true };
  }

  validateAge(control: FormControl) {
    const age = new Date(control.value).getFullYear();
    const currentYear = new Date().getFullYear();
    const minAge = 18;
    if (currentYear - age < minAge) {
      return { age: { value: control.value } };
    }
    return null;
  }


  submitForm(): void {
    if(this.validateForm.invalid) {
      return;
    }

    const payLoad = {
      email:this.email.value,password:this.password.value,
    }

    this.authService.register(payLoad).subscribe({
      next : (response) => {
        window.localStorage["token"] = response.token;
        this.router.navigate(["/dashboard"]);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
   passwordValidator(control: AbstractControl) {
    const password = control.value;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const valid = hasUpperCase && hasSpecialChar;
    if (!valid) {
      return { passwordInvalid: true };
    }
    return null;
  }

  get email() : FormControl{
    return this.validateForm.get("email") as FormControl;
  }
  
  get password() : FormControl{
    return this.validateForm.get("password") as FormControl;
  }

}