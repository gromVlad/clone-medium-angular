import { Component } from '@angular/core';
import { FeedComponent } from '../feed/component/feed.component';

@Component({
  selector: 'app-globalfeed',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './globalfeed.component.html',
  styleUrl: './globalfeed.component.scss',
})
export class GlobalfeedComponent {
  apiUrl = '/articles';
}
