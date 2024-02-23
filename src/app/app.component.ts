import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { getCurrentUserAction } from './features/auth/store/actions/getCurrentUser.action';
import { Store } from '@ngrx/store';
import { IAppState } from './shared/model/appState.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'clone-medium-angular';
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }
}
