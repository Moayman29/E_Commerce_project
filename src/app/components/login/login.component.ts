import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoading = false;
  errorMsg = '';
  passwordTextType = false;
  loginErrorMsg='';

  constructor(private _auth: AuthService, private _router: Router) {}

    logInForm: FormGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
      ]),
    });
    
  handleLogIn() {
    
    this.isLoading = true;    

    if (this.logInForm.valid) {
       this._auth.logIn(this.logInForm.value).subscribe({
        next: (data) => {
          console.log(data);
          if (data.message == 'success') {
            this.isLoading = false;
            localStorage.setItem('userName',data.user.name);
            localStorage.setItem('token', data.token);
            this._auth.decodeToken();
            this._router.navigate(['/home']);
          }
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
          if (error.error.statusMsg == 'fail') {
            this.errorMsg = error.error.message;
            console.error(this.errorMsg);
          }
        },
      });
    }
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
}
