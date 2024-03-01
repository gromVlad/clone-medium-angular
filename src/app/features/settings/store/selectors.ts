import { IAppState } from "src/app/shared/model/appState.model"
import { ISettingsState } from "../types/settingsState.model"
import { createFeatureSelector, createSelector } from "@ngrx/store";


export const settingsFeatureSelector = createFeatureSelector<
  IAppState,
  ISettingsState
>('settings')

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: ISettingsState) => settingsState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: ISettingsState) => settingsState.validationErrors
);
