import { Component } from '@angular/core';
import { FeedComponent } from '../feed/component/feed.component';
import { BannerComponent } from 'src/app/core/banner/banner.component';
import { PopularTagsComponent } from '../popular-tags/component/popular-tags.component';

@Component({
  selector: 'app-globalfeed',
  standalone: true,
  imports: [FeedComponent, BannerComponent, PopularTagsComponent],
  templateUrl: './globalfeed.component.html',
  styleUrl: './globalfeed.component.scss',
})
export class GlobalfeedComponent {
  apiUrl = '/articles';
}
