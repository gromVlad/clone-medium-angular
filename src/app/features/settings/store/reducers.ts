import { createReducer, on } from "@ngrx/store"
import { ISettingsState } from "../types/settingsState.model"
import { updateCurrentUserAction, updateCurrentUserFailureAction, updateCurrentUserSuccessAction } from "../../auth/store/actions/updateCurrentUser.action";


const initialState: ISettingsState = {
  isSubmitting: false,
  validationErrors: null
}

export const settingsReducers = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): ISettingsState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): ISettingsState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): ISettingsState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

