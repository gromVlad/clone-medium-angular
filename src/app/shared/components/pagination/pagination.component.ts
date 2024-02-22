import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilsService } from '../../utils/utils.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit {
  private utilsService = inject(UtilsService);

  @Input('total') totalProps!: number;
  @Input('limit') limitProps!: number;
  @Input('currentPage') currentPageProps!: number;
  @Input('url') urlProps!: string;

  pagesCount!: number;
  pages!: number[];

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utilsService.range(1, this.pagesCount);
  }
}
