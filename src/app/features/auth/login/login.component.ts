import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/shared/model/appState.model';
import { isSubmittingSelector, validationErrorsSelector } from '../store/selectors';
import { IRegisterRequest } from '../model/registerRequest.model';
import { IBackendErrors } from 'src/app/shared/model/backendErrors.model';
import { BackendErrorMessagesComponent } from 'src/app/shared/components/backend-error-messages/backend-error-messages.component';
import { loginAction } from '../store/actions/actionslogin';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BackendErrorMessagesComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class loginComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  backendErrors$!: Observable<IBackendErrors | null>;

  constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    console.log('loginForm');
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    const request: IRegisterRequest = {
      user: this.form.value,
    };
    console.log(this.form.value);

    this.store.dispatch(loginAction({ request }));
  }
}
