import { IGetFeedResponse } from "./getFeedResponse.model";

export interface IFeedState {
  isLoading: boolean;
  error: string | null;
  data: IGetFeedResponse | null;
}
