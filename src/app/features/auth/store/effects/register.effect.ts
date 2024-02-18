import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions';
import { ICurrentUser } from 'src/app/shared/model/currentUser.model';
import { AuthService } from '../../service/auth.service';
import { of } from 'rxjs';

@Injectable()
export class RegisterEffect {

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            return registerSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(registerFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
