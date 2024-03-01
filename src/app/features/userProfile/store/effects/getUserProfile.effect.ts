import { Injectable, inject } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, switchMap } from "rxjs/operators"
import { IUserProfile } from "../../model/userProfile.model"
import { getUserProfileAction, getUserProfileFailureAction, getUserProfileSuccessAction } from "../actions/getUserProfile.action"
import { of } from "rxjs"
import { UserProfileService } from "../../services/userProfile.service"

@Injectable()
export class GetUserProfileEffect {
  private actions$ = inject( Actions)
    private userProfileService = inject( UserProfileService)

  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap(({slug}) => {
        return this.userProfileService.getUserProfile(slug).pipe(
          map((userProfile: IUserProfile) => {
            return getUserProfileSuccessAction({userProfile})
          }),

          catchError(() => {
            return of(getUserProfileFailureAction())
          })
        )
      })
    )
  )

}
