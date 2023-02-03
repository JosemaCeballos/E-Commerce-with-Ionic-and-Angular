import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login-auth0',
  templateUrl: './login-auth0.component.html',
  styleUrls: ['./login-auth0.component.sass']
})
export class LoginAuth0Component {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }
}
