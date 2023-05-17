import { Component, Input } from '@angular/core';
import { ShopParams } from '../models/shopParams';

@Component({
  selector: 'app-paging-header',
  templateUrl: './paging-header.component.html',
  styleUrls: ['./paging-header.component.scss']
})

export class PagingHeaderComponent {
  @Input() pageSize?: number;
  @Input() pageIndex?: number
  @Input() totalCount?: number;
}
