import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};


  // tslint:disable-next-line:no-shadowed-variable
  constructor(public AuthService: AuthService, private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
  }


  login() {
          this.AuthService.login(this.model).subscribe(next => {
           this.alertify.success('login success');
          }, error => {
            this.alertify.error(error);
          }, () => {
            this.router.navigate(['/members']);
          });
  }

  loggedIn() {
  return  this.AuthService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);

  }

}
