import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserAddressesService } from 'src/app/services/user-addresses/user-addresses.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  addressArr: any[] = [];
  userName='';
  constructor(private _userAddress: UserAddressesService,private _toaster: ToastrService,private _auth:AuthService){}

  addressForm: FormGroup = new FormGroup ({
    name: new FormControl(null),
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  })

  ngOnInit(): void {
    this._userAddress.getAllAddresses().subscribe({
      next:(data)=>{
        console.log('addresses = ',data);
        this.addressArr=data.data;
      },error:(error)=>{
        console.log(error);
      }
    })
    this.userName=this._auth.userName!;
  }
  

  handleAddressForm(){
    console.log('submit pushed');
    this._userAddress.addAddress(this.addressForm.value).subscribe({
      next:(data)=>{
        console.log('data',data);
        console.log('address submited');
        this.addressArr=data.data;
        this.addressForm.reset();
        this._toaster.success(
          'Address added successfully'
        );
      },error:(error)=>{
        console.log(error);
      }
    })
  }

  removeAddress(id:any){
    this._userAddress.removeAddress(id).subscribe({
      next:(data)=>{
        console.log(data);
        this.addressArr=data.data;
        this._toaster.success(
          'Address removed successfully'
        );
      },error:(error)=>{
        console.log(error);
      }
    })
  }

}
