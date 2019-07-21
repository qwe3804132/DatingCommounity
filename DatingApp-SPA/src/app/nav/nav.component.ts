import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};


  // tslint:disable-next-line:no-shadowed-variable
  constructor(private AuthService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }


  login() {
          this.AuthService.login(this.model).subscribe(next => {
           this.alertify.success('login success');
          }, error => {
            this.alertify.error(error);
          });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }

}
