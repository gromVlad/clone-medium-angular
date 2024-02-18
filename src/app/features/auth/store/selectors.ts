import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/shared/model/appState.model";
import { IAuthState } from "../model/authState.model";


export const authFeatureSelector = (state: IAppState) => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmitting
);
