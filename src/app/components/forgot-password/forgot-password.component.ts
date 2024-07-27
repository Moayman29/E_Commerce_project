import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  isLoading = false;
  errorMsg = '';
  userEmail:any;

  section1: boolean = true;
  section2: boolean = false;
  section3: boolean = false;

  constructor(private _auth: AuthService, private _router: Router) {}

  // email section

  forgotForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  handleForgot() {
    this.isLoading = true;

    if (this.forgotForm.valid) {
      console.log(this.forgotForm.value);
      this._auth.forgotPassword(this.forgotForm.value).subscribe({
        next: (data) => {
          if (data.statusMsg === 'success') {
            this.isLoading = false;
            console.log(data);

            this.userEmail=this.forgotForm.value;

            this.section1 = false;
            this.section2 = true;
            this.section3 = false;
          }
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
          this.errorMsg = error.error.message;
        },
      });
    }
  }

  //reset code section

  resetCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
    ]),
  });

  handleResetCode() {
    this.isLoading = true;

    if (this.resetCodeForm.valid) {
      console.log(this.resetCodeForm.value);
      this._auth.verifyResetCode(this.resetCodeForm.value).subscribe({
        next: (data) => {
          if (data.status == 'Success') {
            this.isLoading = false;
            console.log(data);

            this.section1 = false;
            this.section2 = false;
            this.section3 = true;
          }
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
          this.errorMsg = error.error.message;
        },
      });
    }
  }

  // new password section

  resetPasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/[A-Z][a-z0-9]{3,8}/),
    ]),
  });

  handleNewPassword() {
    this.isLoading = true;

    if (this.resetPasswordForm.valid) {
      console.log(this.resetPasswordForm.value);
      this._auth.resetPassword(this.resetPasswordForm.value).subscribe({
        next: (data) => {
          if (data.statusMsg != 'fail') {
            this.isLoading = false;
            console.log(data);
            this._router.navigate(['/home']);
          }
        },
        error: (error) => {
          console.log(error);
          this.isLoading = false;
          this.errorMsg = error.error.message;
        },
      });
    }
  }
}
