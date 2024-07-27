import { Component } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading= false;
  errorMsg='';
  passwordTextType = false;
  repasswordTextType = false;

  constructor(private _auth:AuthService,private _router:Router){};


  signUpForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/[A-Z][a-z0-9]{6,8}/)]),
    rePassword: new FormControl(null,[Validators.required]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },
  {validators: this.repasswordValidation('password','rePassword')}
  );

  handleSignUp(){
    this.isLoading= true;
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value);

    this._auth.signUp(this.signUpForm.value).subscribe({
      next:(data) => {
        if(data.message == 'success'){
          this.isLoading= false;
          console.log(data);
          this._router.navigate(['/login']);
        };
      },
      error:(error)=>{
        console.log(error);
        if(error.error.message === 'Account Already Exists'){
          this.isLoading= false;
          this.errorMsg = error.error.message;
        };
      },
    });
   };
  }


  repasswordValidation(controlName: string, matchingControlName: string):ValidatorFn {
    return (form: AbstractControl): ValidationErrors|null=>{
      const control = form.get(controlName);
      const matchingControl = form.get(matchingControlName);

      if(control?.value === matchingControl?.value) {
        return null;
      }
      else {
        const error = {repasswordNoMatch: 'both password and repassword must be the same'};

        matchingControl!.setErrors(error);
        return error;
      }
    }
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
  
  togglerepasswordTextType() {
    this.repasswordTextType = !this.repasswordTextType;
  }


}
