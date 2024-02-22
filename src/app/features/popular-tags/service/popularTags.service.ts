import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { IGetPopularTagsResponse } from "../module/getPopularTagsResponse.module";

@Injectable({ providedIn: 'root' })
export class PopularTagsService {
  private http = inject(HttpClient);

  getPopularTags(): Observable<string[]> {
    const url = environment.apiUrl + '/tags';
    return this.http.get<IGetPopularTagsResponse>(url).pipe(
      map((response: IGetPopularTagsResponse) => {
        return response.tags;
      })
    );
  }
}
