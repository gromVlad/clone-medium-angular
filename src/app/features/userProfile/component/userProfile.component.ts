import { CommonModule } from "@angular/common"
import { Component, OnInit, inject } from "@angular/core"
import { IUserProfile } from "../model/userProfile.model"
import { Observable, Subscription, combineLatest, filter, map } from "rxjs"
import { Store, select } from "@ngrx/store"
import { ActivatedRoute, Params, Router, RouterModule } from "@angular/router"
import { currentUserSelector } from "../../auth/store/selectors"
import { errorSelector, isLoadingSelector, userProfileSelector } from "../store/selectors"
import { ICurrentUser } from "src/app/shared/model/currentUser.model"
import { getUserProfileAction } from "../store/actions/getUserProfile.action"
import { FeedComponent } from "../../feed/component/feed.component"
import { BackendErrorMessagesComponent } from "src/app/shared/components/backend-error-messages/backend-error-messages.component"
import { LoadingComponent } from "src/app/shared/components/loading/loading.component"

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    FeedComponent,
    BackendErrorMessagesComponent,
    LoadingComponent,
    RouterModule,
  ],
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  userProfile!: IUserProfile | null;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  userProfileSubscription!: Subscription;
  slug!: string | null;
  isCurrentUserProfile$!: Observable<boolean>;

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }
  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isCurrentUserProfile$ = combineLatest(
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean))
    ).pipe(
      map(([currentUser, userProfile]: [ICurrentUser, IUserProfile]) => {
        return currentUser.username === userProfile.username;
      })
    );
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    return isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`;
  }

  initializeListeners(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile) => {
        this.userProfile = userProfile;
      });

    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug'];
      this.fetchUserProfile();
    });
  }

  fetchUserProfile(): void {
    this.store.dispatch(getUserProfileAction({ slug: this.slug! }));
  }
}
