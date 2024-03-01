import { CommonModule } from "@angular/common";
import { Component, Input, OnInit, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { addToFavoritesAction } from "../store/actions/addToFavorites.action";


@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-add-to-favorites',
  templateUrl: './addToFavorites.component.html',
  styleUrls: ['./addToFavorites.component.scss'],
})
export class AddToFavoriteComponent implements OnInit {
  private store = inject( Store);

  @Input('isFavorited') isFavoritedProps!: boolean;
  @Input('favoritesCount') favoritesCountProps!: number;
  @Input('articleSlug') articleSlugProps!: string;

  favoritesCount!: number;
  isFavorited!: boolean;


  ngOnInit(): void {
    this.favoritesCount = this.favoritesCountProps;
    this.isFavorited = this.isFavoritedProps;
  }

  handleLike(): void {
    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlugProps,
      })
    );
    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount = this.favoritesCount + 1;
    }

    this.isFavorited = !this.isFavorited;
  }
}
