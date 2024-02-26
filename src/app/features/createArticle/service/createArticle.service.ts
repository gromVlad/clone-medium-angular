import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { IArticle } from "src/app/shared/model/article.model";
import { IArticleInput } from "src/app/shared/model/articleInput.interface";
import { environment } from "src/environments/environment";
import { ISaveArticleResponse } from "../model/saveArticleResponse.model";

@Injectable({ providedIn: 'root' })
export class CreateArticleService {
  private http = inject(HttpClient);

  createArticle(articleInput: IArticleInput): Observable<IArticle> {
    const fullUrl = environment.apiUrl + '/articles';
    return this.http.post<ISaveArticleResponse>(fullUrl, articleInput).pipe(
      map((response: ISaveArticleResponse) => {
        return response.article;
      })
    );
  }
}
