import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirmPassword: new FormControl('', Validators.required)
    }, this.passwordMatchValidator);
  }


  passwordMatchValidator(g: FormGroup) {
    // tslint:disable-next-line:object-literal-key-quotes
    return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true};
  }

  register() {
     this.authService.register(this.model).subscribe(() => {
      this.alertify.success('registration is successful');
     }, error => {
       this.alertify.error(error);
     });
    // console.log(this.registerForm.value);
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
