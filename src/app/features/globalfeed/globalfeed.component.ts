import { Component } from '@angular/core';
import { FeedComponent } from '../feed/component/feed.component';
import { BannerComponent } from 'src/app/core/banner/banner.component';

@Component({
  selector: 'app-globalfeed',
  standalone: true,
  imports: [FeedComponent,BannerComponent],
  templateUrl: './globalfeed.component.html',
  styleUrl: './globalfeed.component.scss',
})
export class GlobalfeedComponent {
  apiUrl = '/articles';
}
