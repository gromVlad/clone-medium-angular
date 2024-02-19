import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/shared/model/appState.model";
import { IAuthState } from "../model/authState.model";


export const authFeatureSelector = (state: IAppState) => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.validationErrors
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.currentUser
);