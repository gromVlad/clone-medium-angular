import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { ICurrentUser } from "src/app/shared/model/currentUser.model";
import { updateCurrentUserAction, updateCurrentUserFailureAction, updateCurrentUserSuccessAction } from "../actions/updateCurrentUser.action";
import { of } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "../../service/auth.service";

@Injectable()
export class UpdateCurrentUserEffect {
  private actions$ = inject( Actions)
  private authService = inject( AuthService)

  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({ currentUserInput }) => {
        return this.authService.updateCurrentUser(currentUserInput).pipe(
          map((currentUser: ICurrentUser) => {
            return updateCurrentUserSuccessAction({ currentUser });
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateCurrentUserFailureAction({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    )
  );
}
