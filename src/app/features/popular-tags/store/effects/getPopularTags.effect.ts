import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { getPopularTagsAction, getPopularTagsFailure, getPopularTagsSuccessAction } from "../actions/getPopularTags.action";
import { of } from "rxjs";
import { PopularTagsService } from "../../service/popularTags.service";

@Injectable()
export class GetPopularTagsEffect {
  private actions$ = inject( Actions)
    private popularTagsService = inject( PopularTagsService)

  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: string[]) => {
            return getPopularTagsSuccessAction({ popularTags });
          }),

          catchError(() => {
            return of(getPopularTagsFailure());
          })
        );
      })
    )
  );
}
