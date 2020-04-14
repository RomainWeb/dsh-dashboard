import { HttpResponse } from '@angular/common/http';
import { LoginService } from './login.service';
import { AppState } from './../../../+state/index';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromUserActions from 'src/app/+state/user/actions';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'dsh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  rememberMeCtrl: FormControl;
  requestError: any;

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {
    this.emailCtrl = new FormControl(null, [Validators.required]);
    this.passwordCtrl = new FormControl(null, [Validators.required]);
    this.rememberMeCtrl = new FormControl(false);

    this.loginForm = this.formBuilder.group({
      email: this.emailCtrl,
      password: this.passwordCtrl,
      rememberMe: this.rememberMeCtrl
    })
  }

  ngOnInit(): void {
    this.store.dispatch(fromUserActions.changeIsLogging({ isLogging: false }));
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.emailCtrl.value;
      const password = this.passwordCtrl.value;
      const rememberMe = this.rememberMeCtrl.value;

      this.loginService.login(email, password, rememberMe)
      .pipe(catchError((err) => {
        this.requestError = err;
        return of(err)
      }))
      .subscribe((res: any) => {
        console.log(res);
      });
    }
  }
}
