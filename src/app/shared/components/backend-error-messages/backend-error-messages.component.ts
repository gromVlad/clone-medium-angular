import { Component, Input, OnInit } from '@angular/core';
import { IBackendErrors } from '../../model/backendErrors.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-backend-error-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backend-error-messages.component.html',
  styleUrl: './backend-error-messages.component.scss',
})
export class BackendErrorMessagesComponent implements OnInit{
  @Input('backendErrors') backendErrorsProps!: IBackendErrors;

  errorMessages!: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(' ');
        return `${name} ${messages}`;
      }
    );
  }

}
