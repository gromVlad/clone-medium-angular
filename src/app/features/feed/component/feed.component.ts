import { OnChanges, OnDestroy, OnInit, SimpleChanges, inject } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IGetFeedResponse } from '../model/getFeedResponse.model';
import { Store, select } from '@ngrx/store';
import { errorSelector, feedSelector, isLoadingSelector } from '../store/selectors';
import { getFeedAction } from '../store/actions/getFeed.action';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { ErrorMessageComponent } from 'src/app/shared/components/error-message/error-message.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { environment } from 'src/environments/environment';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';
import { UtilsService } from 'src/app/shared/utils/utils.service';
import { TagListComponent } from 'src/app/shared/components/tag-list/tag-list.component';
import { getPopularTagsAction } from '../../popular-tags/store/actions/getPopularTags.action';
import { AddToFavoriteComponent } from '../../addToFavorites/component/addToFavorites.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ErrorMessageComponent,
    LoadingComponent,
    PaginationComponent,
    TagListComponent,
    AddToFavoriteComponent
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  private store = inject(Store);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private utilsService = inject(UtilsService);

  @Input('apiUrl') apiUrlProps!: string;

  feed$!: Observable<IGetFeedResponse | null>;
  error$!: Observable<string | null>;
  isLoading$!: Observable<boolean>;

  limit = environment.limit;
  baseUrl!: string;
  queryParamsSubscription!: Subscription;
  currentPage!: number;
  wordMaxLenght = '...';

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const apiChange =
      !changes['apiUrlProps'].firstChange &&
      changes['apiUrlProps'].currentValue !==
        changes['apiUrlProps'].previousValue;
    if (apiChange) {
      this.fetchFeed();
    }
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || '1');
        this.fetchFeed();
      }
    );
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = this.utilsService.parseUrl(this.apiUrlProps);
    const stringifiedParams = this.utilsService.stringifyParams({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
    this.store.dispatch(getPopularTagsAction());
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }
}
