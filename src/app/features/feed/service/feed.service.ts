import { environment } from "src/environments/environment";
import { IGetFeedResponse } from "../model/getFeedResponse.model";
import { Observable } from "rxjs";
import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class FeedService {
  http = inject(HttpClient);

  getFeed(url: string): Observable<IGetFeedResponse> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<IGetFeedResponse>(fullUrl);
  }
}
