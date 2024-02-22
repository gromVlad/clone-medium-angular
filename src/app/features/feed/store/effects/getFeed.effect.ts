import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { FeedService } from "../../service/feed.service";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "../actions/getFeed.action";
import { catchError, map, switchMap } from "rxjs/operators";
import { IGetFeedResponse } from "../../model/getFeedResponse.model";
import { of } from "rxjs";

@Injectable()
export class GetFeedEffect {
  private actions$ = inject(Actions);
  private feedService = inject(FeedService);

  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: IGetFeedResponse) => {
            return getFeedSuccessAction({ feed });
          }),

          catchError(() => {
            return of(getFeedFailureAction());
          })
        );
      })
    )
  );

}
