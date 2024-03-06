import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading= false;
  errorMsg='';

  constructor(private _auth:AuthService,private _router:Router){};


  signUpForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/[A-Z][a-z0-9]{6,8}/)]),
    rePassword: new FormControl(null,[Validators.required,Validators.pattern(/[A-Z][a-z0-9]{6,8}/)]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  });

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
  };
}
