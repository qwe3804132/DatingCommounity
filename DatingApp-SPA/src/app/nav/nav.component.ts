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
  photoUrl: string;


  // tslint:disable-next-line:no-shadowed-variable
  constructor(public AuthService: AuthService, private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {
    this.AuthService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
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
    localStorage.removeItem('user');
    this.AuthService.decodedToken = null;
    this.AuthService.currentUser = null;
    this.alertify.message('logged out');
    this.router.navigate(['/home']);

  }

}
