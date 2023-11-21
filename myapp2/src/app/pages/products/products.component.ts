import { Component } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  title = 'myapp';
  styles = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    padding: '20px',
    width: '200px',
  };

  products: any;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((response: any) => {

        this.products = response.products;
      });
    // Assuming products is the direct array, not nested in another array
  }
}
