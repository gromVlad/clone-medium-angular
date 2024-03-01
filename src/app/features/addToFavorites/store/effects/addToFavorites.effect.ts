import { Injectable, inject } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, switchMap } from "rxjs/operators"
import { addToFavoritesAction, addToFavoritesFailureAction, addToFavoritesSuccessAction } from "../actions/addToFavorites.action"
import { IArticle } from "src/app/shared/model/article.model"
import { of } from "rxjs"
import { AddToFavoritesService } from "../../services/addToFavorites.service"


@Injectable()
export class AddToFavoritesEffect {
  private actions$ = inject( Actions)
    private addToFavoritesService = inject( AddToFavoritesService)

  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({isFavorited, slug}) => {
        const article$ = isFavorited
          ? this.addToFavoritesService.removeFromFavorites(slug)
          : this.addToFavoritesService.addToFavorites(slug)
        return article$.pipe(
          map((article: IArticle) => {
            return addToFavoritesSuccessAction({article})
          }),
          catchError(() => {
            return of(addToFavoritesFailureAction())
          })
        )
      })
    )
  )
}
