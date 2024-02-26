import { IAppState } from "src/app/shared/model/appState.model";
import { ICreateArticleState } from "../model/createArticleState.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const createArticleFeatureSelector = createFeatureSelector<
  IAppState,
  ICreateArticleState
>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: ICreateArticleState) => createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: ICreateArticleState) =>
    createArticleState.validationErrors
);
