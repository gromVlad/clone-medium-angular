import { Component } from '@angular/core';
import { FeedComponent } from '../feed/component/feed.component';
import { BannerComponent } from 'src/app/core/banner/banner.component';
import { PopularTagsComponent } from '../popular-tags/component/popular-tags.component';
import { FeedTogglerComponent } from 'src/app/shared/components/feed-toggler/feed-toggler.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-globalfeed',
  standalone: true,
  imports: [
    CommonModule,
    FeedComponent,
    BannerComponent,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
  templateUrl: './globalfeed.component.html',
  styleUrl: './globalfeed.component.scss',
})
export class GlobalfeedComponent {
  apiUrl = '/articles';
}
