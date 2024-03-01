import { HttpClient } from "@angular/common/http"
import { Injectable, inject } from "@angular/core"
import { Observable, map } from "rxjs"
import { IUserProfile } from "../model/userProfile.model"
import { IGetUserProfileResponse } from "../model/getUserProfileResponse.model"
import { environment } from "src/environments/environment"


@Injectable({ providedIn: 'root' })
export class UserProfileService {
  private http = inject(HttpClient);

  getUserProfile(slug: string): Observable<IUserProfile> {
    const url = `${environment.apiUrl}/profiles/${slug}`;

    return this.http.get<IGetUserProfileResponse>(url).pipe(
      map((response: IGetUserProfileResponse) => {
        return response.profile;
      })
    );
  }
}
