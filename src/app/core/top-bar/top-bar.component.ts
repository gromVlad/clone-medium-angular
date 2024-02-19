import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { currentUserSelector, isAnonymousSelector, isLoggedInSelector } from 'src/app/features/auth/store/selectors';
import { IAppState } from 'src/app/shared/model/appState.model';
import { ICurrentUser } from 'src/app/shared/model/currentUser.model';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean | null>;
  isAnonymous$!: Observable<boolean>;
  currentUser$!: Observable<ICurrentUser | null>;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}