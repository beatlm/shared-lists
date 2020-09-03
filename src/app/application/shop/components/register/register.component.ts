import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStore } from 'src/app/application/auth/auth.store';
import { AuthErrors } from 'src/app/application/auth/auth.error.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.minLength(8)]);
  passwordRepeat = new FormControl('', [
    Validators.required,
    this.passwordMatcher.bind(this),
  ]);
  displayName = new FormControl('', [Validators.required]);

  // confirm new password validator
  private passwordMatcher(): { [s: string]: boolean } {
    if (
      this.password &&
      this.passwordRepeat &&
      this.password.value !== this.passwordRepeat.value
    ) {
      console.log('password:' + this.password.value);
      console.log('passwordRepeat:' + this.passwordRepeat.value);
      return { passwordNotMatch: true };
    }
    return null;
  }
  getErrorMessage() {
    return this.email.hasError('required')
      ? 'Por favor introduce un email'
      : this.email.hasError('email')
      ? 'El email introducido es incorrecto'
      : '';
  }
  getErrorMessagePassword() {
    return this.password.hasError('minlength')
      ? 'La contraseña debe tener al menos 8 caracteres'
      : '';
  }
  getErrorMessagePasswordRepeat() {
    return this.passwordRepeat.hasError('passwordNotMatch')
      ? 'Las contraseñas no coinciden'
      : '';
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.sync();
  }
  public register() {
    if (this.passwordRepeat.status == 'INVALID') {
      console.log('error de password repeat');
    } else {
      console.log('email ' + this.email.value);
      this.authService
        .signup(this.email.value, this.password.value, this.displayName.value)
        .then(
          (res) => {
            this.authService.signin(this.email.value,this.password.value).then((res) => {
              this.authService.update({displayName:this.displayName.value});
              console.log(res);
              alert("El registro se ha realizado correctamente. Haz login para entrar en la aplicación.")
              this.router.navigate(['/']);
            })
       
          },
          (err) => {
            alert(AuthErrors[err.code]);
            console.log('Ha ocurrido un error ' + err.code);
          }
        );

    }
  }
}
