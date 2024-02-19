import { IBackendErrors } from "src/app/shared/model/backendErrors.model";
import { ICurrentUser } from "src/app/shared/model/currentUser.model";

export interface IAuthState {
  isLoading: boolean;
  isSubmitting: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackendErrors | null;
}
