import {createAction, props} from '@ngrx/store'
import { ActionTypes } from '../actionTypes';
import { IArticle } from 'src/app/shared/model/article.model';

export const addToFavoritesAction = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{isFavorited: boolean; slug: string}>()
)

export const addToFavoritesSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{article: IArticle}>()
)
export const addToFavoritesFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE
)
