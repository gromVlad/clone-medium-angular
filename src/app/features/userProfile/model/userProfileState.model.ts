import { IUserProfile } from "./userProfile.model"

export interface IUserProfileState {
  data: IUserProfile | null
  isLoading: boolean
  error: string | null
}
