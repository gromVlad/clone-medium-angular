import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBackendErrors } from 'src/app/shared/model/backendErrors.model';
import { isSubmittingSelector, validationErrorsSelector } from '../store/selectors';
import { createArticleAction } from '../store/actions/createArticle.action';
import { ArticleFormComponent } from 'src/app/shared/components/article-form/article-form.component';
import { IArticleInput } from 'src/app/shared/model/articleInput.model';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [CommonModule, ArticleFormComponent],
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.scss',
})
export class CreateArticleComponent {
  private store = inject(Store);

  initialValues: IArticleInput = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };
  isSubmitting$!: Observable<boolean | null>;
  backendErrors$!: Observable<IBackendErrors | null>;

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(articleInput: IArticleInput): void {
    this.store.dispatch(createArticleAction({ articleInput }));
  }
}
