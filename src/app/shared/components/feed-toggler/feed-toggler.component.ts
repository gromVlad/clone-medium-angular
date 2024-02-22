import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/features/auth/store/selectors';

@Component({
  selector: 'app-feed-toggler',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './feed-toggler.component.html',
  styleUrl: './feed-toggler.component.scss',
})
export class FeedTogglerComponent implements OnInit {
  private store = inject(Store);

  @Input('tagName') tagNameProps!: string;

  isLoggedIn$!: Observable<boolean | null>;


  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
