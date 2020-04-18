import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';
import { ComponentFixture, async, TestBed, flush, fakeAsync } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

const loginServiceStub = {
  login(email: string, password: string, rememberMe: boolean) {
    const userResponse = {
      id: 1,
      username: 'moi@chezmoi.com',
      firstName: 'moi',
      lastName: 'chezmoi',
      token: 'fake-jwt-token'
    }

    return userResponse;
  }
}

describe('Login Component', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;

  // * FormBuilder
  const formBuilder: FormBuilder  = new FormBuilder();

  // * Store
  let store: MockStore;
  const initialState = { isLogging: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
      ],
      imports: [
        CommonModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MatCheckboxModule
      ],
      providers: [
        LoginService,
        { provide: LoginService, useValue: loginServiceStub },
        { provide: FormBuilder, useValue: formBuilder },
        provideMockStore({ initialState })
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    store = TestBed.inject(MockStore);

    fixture.detectChanges();

    const emailCtrl = new FormControl(null, [Validators.required]);
    const passwordCtrl = new FormControl(null, [Validators.required]);
    const rememberMeCtrl = new FormControl(false);

    component.loginForm = formBuilder.group({
      email: emailCtrl,
      password: passwordCtrl,
      rememberMe: rememberMeCtrl
    });
  });

  // * Test component is created
  it('should create component', () => {
    expect(component).toBeDefined();
  });

  // * Test loginForm is valid when email and password are not empty
  it('should login form is valid', () => {
    component.loginForm.get('email').setValue('coucou@chezmoi.com');
    component.loginForm.get('password').setValue('123456');

    expect(component.loginForm.valid).toBeTruthy();
  });

  // * Test loginForm is invalid attribute when email or password id empty
  it('should login form is invalid', () => {
    component.loginForm.get('email').setValue(null);
    expect(component.loginForm.valid).toBeFalsy();

    component.loginForm.get('password').setValue(null);
    expect(component.loginForm.valid).toBeFalsy();
  });

  // * Test if error message id display when email input is empty
  it('should add ng-invalid on email input and display error message', () => {
    component.loginForm.get('email').setValue(null);
    component.loginForm.get('email').markAllAsTouched();

    const emailInput = fixture.debugElement.query(By.css('[formcontrolname=email]')).nativeElement;
    expect(emailInput).toHaveClass('ng-invalid');

    const emailError = fixture.debugElement.query(By.css('mat-error')).nativeElement;
    expect(emailError).toBeTruthy();
    expect(emailError.textContent).toEqual('Email is required');
  });

  // * Test if submit button is disabled when login form is invalid
  it('should disabled attribute on submit button when login form is invalid', () => {
    component.loginForm.get('email').setValue(null);

    const submitBtn = fixture.debugElement.query(By.css('.btn-submit')).nativeElement;
    expect(submitBtn.disabled).toBeTrue();
    expect(submitBtn.textContent).toContain('LOG IN');
  });

  // * Test if method onSubmit is call when click on submit button
  it('should call onSubmit when click on submit button', () => {
    spyOn(component, 'onSubmit');

    const submitBtn = fixture.debugElement.query(By.css('.btn-submit')).nativeElement;
    submitBtn.click();

    fixture.whenStable().then(() => {
      expect(component.onSubmit).toHaveBeenCalled();
    });
  });

  // * Test checkbox have checked class when formcontrol change
  it('should toggle mat-checkbox-checked class on checkbox', () => {
    component.loginForm.get('rememberMe').setValue(false);

    const checkboxInput = fixture.debugElement.query(By.css('[formcontrolname=rememberMe]')).nativeElement;

    expect(checkboxInput).not.toHaveClass('mat-checkbox-checked');

    component.loginForm.get('rememberMe').setValue(true);
    fixture.detectChanges();
    expect(checkboxInput).toHaveClass('mat-checkbox-checked');
  });

  // * Test condition if login form is valid do call login() on service
  it('should call login service when login form is valid', () => {
    const userResponse = {
      id: 1,
      username: 'moi@chezmoi.com',
      firstName: 'moi',
      lastName: 'chezmoi',
      token: 'fake-jwt-token'
    };
    const serviceLogin = spyOn(loginService, 'login').and.returnValue(of(userResponse));

    component.loginForm.get('email').setValue('coucou@chezmoi.com');
    component.loginForm.get('password').setValue('123456');
    component.loginForm.get('rememberMe').setValue(true);

    component.onSubmit();

    expect(serviceLogin).toHaveBeenCalled();
  });

  // * Test condition  if login form is not valid do not call login() on service
  it('should not call login service when login form is unvalid', () => {
    const userResponse = {
      id: 1,
      username: 'moi@chezmoi.com',
      firstName: 'moi',
      lastName: 'chezmoi',
      token: 'fake-jwt-token'
    };
    const serviceLogin = spyOn(loginService, 'login').and.returnValue(of(userResponse));

    component.loginForm.get('email').setValue(null);
    component.loginForm.get('password').setValue('123456');
    component.loginForm.get('rememberMe').setValue(true);

    component.onSubmit();

    expect(serviceLogin).not.toHaveBeenCalled();
  })
});