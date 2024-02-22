import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss',
})
export class TagListComponent {
  @Input('tags') tagsProps!: string[];
}
