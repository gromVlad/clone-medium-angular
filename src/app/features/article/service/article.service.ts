import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { IArticle } from "src/app/shared/model/article.model";
import { environment } from "src/environments/environment";
import { IGetArticleResponse } from "../model/getArticleResponse.model";

@Injectable({ providedIn: 'root' })
export class ArticleService {
  private http = inject(HttpClient);

  getArticle(slug: string): Observable<IArticle> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http.get<IGetArticleResponse>(fullUrl).pipe(
      map((response: IGetArticleResponse) => {
        return response.article;
      })
    );
  }

  deleteArticle(slug: string): Observable<{}> {
    const url = `${environment.apiUrl}/articles/${slug}`;

    return this.http.delete<{}>(url);
  }
}
