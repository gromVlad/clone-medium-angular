import { inject } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetFeedResponse } from '../model/getFeedResponse.model';
import { Store, select } from '@ngrx/store';
import { errorSelector, feedSelector, isLoadingSelector } from '../store/selectors';
import { getFeedAction } from '../store/actions/getFeed.action';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  @Input('apiUrl') apiUrlProps!: string;

  feed$!: Observable<IGetFeedResponse | null>;
  error$!: Observable<string | null>;
  isLoading$!: Observable<boolean>;
  private store = inject(Store);

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
