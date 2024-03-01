import { IAppState } from "src/app/shared/model/appState.model"
import { IUserProfileState } from "../model/userProfileState.model"
import { createFeatureSelector, createSelector } from "@ngrx/store"

export const userProfileFeatureSelector = createFeatureSelector<
  IAppState,
  IUserProfileState
>('userProfile')

export const userProfileSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: IUserProfileState) => userProfileState.data
);

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: IUserProfileState) => userProfileState.isLoading
);

export const errorSelector = createSelector(
  userProfileFeatureSelector,
  (userProfileState: IUserProfileState) => userProfileState.error
);
