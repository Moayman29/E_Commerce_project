import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  isLogIn = false;

  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
    this._auth.isLoggedIn.subscribe((data) => {
      this.isLogIn = data;
    });
  }
}
