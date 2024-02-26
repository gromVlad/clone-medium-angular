import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionsTypes";
import { IArticleInput } from "src/app/shared/model/articleInput.interface";
import { IBackendErrors } from "src/app/shared/model/backendErrors.model";
import { IArticle } from "src/app/shared/model/article.model";

export const createArticleAction = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: IArticleInput }>()
);

export const createArticleSuccessAction = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: IArticle }>()
);

export const createArticleFailureAction = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: IBackendErrors }>()
);
