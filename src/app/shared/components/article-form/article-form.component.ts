import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { IArticleInput } from '../../model/articleInput.model';
import { IBackendErrors } from '../../model/backendErrors.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesComponent } from '../backend-error-messages/backend-error-messages.component';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule, BackendErrorMessagesComponent, ReactiveFormsModule],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss',
})
export class ArticleFormComponent {
  private fb = inject(FormBuilder);

  @Input('initialValues') initialValuesProps!: IArticleInput;
  @Input('isSubmitting') isSubmittingProps!: boolean | null;
  @Input('errors') errorsProps!: IBackendErrors | null;

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<IArticleInput>();

  form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: this.initialValuesProps.title,
      description: this.initialValuesProps.description,
      body: this.initialValuesProps.body,
      tagList: this.initialValuesProps.tagList.join(' '),
    });
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value);
  }
}
