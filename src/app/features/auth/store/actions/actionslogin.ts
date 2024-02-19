import { createAction, props } from "@ngrx/store";
import { ILoginRequest } from "../../model/loginRequest.model";
import { ActionTypes } from "../actionTypes";
import { IBackendErrors } from "src/app/shared/model/backendErrors.model";
import { ICurrentUser } from "src/app/shared/model/currentUser.model";

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: ILoginRequest }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: IBackendErrors }>()
);
