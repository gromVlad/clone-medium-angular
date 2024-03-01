import { IBackendErrors } from "src/app/shared/model/backendErrors.model";
import { ICurrentUser } from "src/app/shared/model/currentUser.model";
import { ICurrentUserInput } from "src/app/shared/model/currentUserInput.model";
import { ActionTypes } from "../actionTypes";
import { createAction, props } from "@ngrx/store";

export const updateCurrentUserAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER,
  props<{ currentUserInput: ICurrentUserInput }>()
);

export const updateCurrentUserSuccessAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const updateCurrentUserFailureAction = createAction(
  ActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: IBackendErrors }>()
);
