import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, filter } from 'rxjs';
import { IBackendErrors } from 'src/app/shared/model/backendErrors.model';
import { ICurrentUser } from 'src/app/shared/model/currentUser.model';
import { isSubmittingSelector, validationErrorsSelector } from '../store/selectors';
import { currentUserSelector } from '../../auth/store/selectors';
import { ICurrentUserInput } from 'src/app/shared/model/currentUserInput.model';
import { updateCurrentUserAction } from '../../auth/store/actions/updateCurrentUser.action';
import { logoutAction } from '../../auth/store/actions/sync.action';
import { BackendErrorMessagesComponent } from 'src/app/shared/components/backend-error-messages/backend-error-messages.component';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [CommonModule, BackendErrorMessagesComponent, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  private fb = inject(FormBuilder);
  private store = inject(Store);

  form!: FormGroup;
  currentUser!: ICurrentUser;
  currentUserSubscription!: Subscription;
  isSubmitting$!: Observable<boolean | null>;
  backendErrors$!: Observable<IBackendErrors | null>;

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: ICurrentUser) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  initializeForm(): void {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    });
  }

  submit(): void {
    const currentUserInput: ICurrentUserInput = {
      ...this.currentUser,
      ...this.form.value,
    };
    this.store.dispatch(updateCurrentUserAction({ currentUserInput }));
  }

  logout(): void {
    this.store.dispatch(logoutAction());
  }
}
