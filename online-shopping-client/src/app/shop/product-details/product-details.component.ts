import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
  
  product?: Product;

  constructor(private route: ActivatedRoute, private shopService: ShopService,
    private bcService: BreadcrumbService) {
      this.bcService.set('@productDetails', ' ');
    }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.shopService.getProduct(+id).subscribe({
        next: response => {
          this.product = response;
          this.bcService.set('@productDetails', this.product.name);
        },
        error: error => console.log(error)
      });  
    }
  }
}
