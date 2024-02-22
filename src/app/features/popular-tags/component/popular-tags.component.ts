import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { getPopularTagsAction } from '../store/actions/getPopularTags.action';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { errorSelector, isLoadingSelector, popularTagsSelector } from '../store/selectors';
import { ErrorMessageComponent } from 'src/app/shared/components/error-message/error-message.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-popular-tags',
  standalone: true,
  imports: [CommonModule,RouterModule, ErrorMessageComponent, LoadingComponent],
  templateUrl: './popular-tags.component.html',
  styleUrl: './popular-tags.component.scss',
})
export class PopularTagsComponent implements OnInit {
  private store = inject(Store);

  popularTags$!: Observable<string[] | null>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
