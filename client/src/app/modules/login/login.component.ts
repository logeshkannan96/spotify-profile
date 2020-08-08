import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LOGIN_URI: any;

  constructor() {
    if (environment.production) {
      this.LOGIN_URI = "https://spotify-profile-angular.herokuapp.com/login"
    }
    else {
      this.LOGIN_URI = "http://localhost:8888/login"
    }
  }

  ngOnInit() {
  }

}
