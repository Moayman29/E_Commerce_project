import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
  
  constructor(private _auth: AuthService, private _router: Router,private _toastr: ToastrService){}

  isLoading = false;
  errorMsg=''
  currentPassTextType = false;
  newPassTextType = false;
  repasswordTextType = false;

  updatePasswordForm: FormGroup = new FormGroup({
    currentPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(/[A-Z][a-z0-9]{3,8}/),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/[A-Z][a-z0-9]{3,8}/),
    ]),

    rePassword: new FormControl(null, [
      Validators.required,
    ]),
  },
  {validators: this.repasswordValidation('password','rePassword')}
  );

  handleUpdatePassword() {
    this.isLoading = true;

    if (this.updatePasswordForm.valid) {
      console.log(this.updatePasswordForm.value);
      this._auth.updatePassword(this.updatePasswordForm.value).subscribe({
        next: (data) => {
          if (data.statusMsg != 'fail') {
            this.isLoading = false;
            console.log(data);
            this._router.navigate(['/home']);
            this._toastr.success('Your password updated successfully');
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



  togglecurrentPassTextType() {
    this.currentPassTextType = !this.currentPassTextType;
  }
  
  togglenewPassTextType() {
    this.newPassTextType = !this.newPassTextType;
  }
  
  togglerepasswordTextType() {
    this.repasswordTextType = !this.repasswordTextType;
  }


}


