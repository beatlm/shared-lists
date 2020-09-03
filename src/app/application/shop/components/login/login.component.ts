import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/application/auth/auth.service';
import { AuthErrors } from 'src/app/application/auth/auth.error.enum';
import { AuthStore } from 'src/app/application/auth/auth.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.minLength(8)]);
  private sub: Subscription;
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
      : 'otro error';
  }
  constructor(private router: Router, private authService: AuthService, private authStore: AuthStore) {}

  ngOnInit() {
    this.sub = this.authService.sync().subscribe();
  }
  login() {
    this.authService.signin(this.email.value, this.password.value).then(
      (res) => {
        console.log()
        this.authStore.update({ uid: this.email.value });
        this.router.navigate(['/shops']);
      },
      (err) => {
        alert(AuthErrors[err.code]);
        console.log('Ha ocurrido un error \n' + err);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
