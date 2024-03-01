import {Injectable, inject} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {environment} from 'src/environments/environment'
import {map} from 'rxjs/operators'
import { IArticle } from 'src/app/shared/model/article.model'
import { IGetArticleResponse } from '../../article/model/getArticleResponse.model'

@Injectable({ providedIn: 'root' })
export class AddToFavoritesService {
  private http = inject(HttpClient);

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`;
  }

  addToFavorites(slug: string): Observable<IArticle> {
    const url = this.getUrl(slug);

    return this.http
      .post<IGetArticleResponse>(url, {})
      .pipe(map(this.getArticle));
  }

  removeFromFavorites(slug: string): Observable<IArticle> {
    const url = this.getUrl(slug);

    return this.http
      .delete<IGetArticleResponse>(url)
      .pipe(map(this.getArticle));
  }

  getArticle(response: IGetArticleResponse): IArticle {
    return response.article;
  }
}
