import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoading = false;
  errorMsg = '';

  constructor(private _auth: AuthService, private _router: Router) {}

    logInForm: FormGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/[A-Z][a-z0-9]{3,8}/),
      ]),
    });
    
  handleLogIn() {
    console.log( "before",this.isLoading);
    
    this.isLoading = true;
    console.log("after",this.isLoading);
    

    if (this.logInForm.valid) {
      console.log(typeof(this.logInForm.value));

       this._auth.logIn(this.logInForm.value).subscribe({
        next: (data) => {
          console.log('hello',data);
          
          if (data.message == 'success') {
            this.isLoading = false;

            localStorage.setItem('token', data.token);
            this._auth.decodeToken();
            this._router.navigate(['/home']);
          }
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
          if (error.statusMsg == 'fail') {
            this.errorMsg = error.message;
            console.error(this.errorMsg);
            

          }
        },
      });
    }
  }
}
