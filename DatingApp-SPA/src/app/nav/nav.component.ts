import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};


  // tslint:disable-next-line:no-shadowed-variable
  constructor(private AuthService: AuthService) { }

  ngOnInit() {
  }


  login() {
          this.AuthService.login(this.model).subscribe(next => {
            console.log('login success');
          }, error => {
            console.log(error);
          });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
