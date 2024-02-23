import { Injectable, inject } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { ArticleService } from "../../service/article.service";
import { catchError, map, switchMap } from "rxjs/operators";
import { IArticle } from "src/app/shared/model/article.model";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "../actions/getArticle.action";
import { of } from "rxjs";

@Injectable()
export class GetArticleEffect {
  private actions$ = inject(Actions);
  private sharedArticleService = inject(ArticleService);

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: IArticle) => {
            return getArticleSuccessAction({ article });
          }),

          catchError(() => {
            return of(getArticleFailureAction());
          })
        );
      })
    )
  );
}
