import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],  // Correct property name
})

export class ProductCardComponent{

  @Input() product: any
  productImageStyle = {
    border: '1px solid black',
    filter: 'sepia(0.3)'
  }

  formState = false

  address = ''
  postalCode = 0

  buyProduct() {
    console.log("compremos un producto");
    this.formState = true;

  }

  orderProduct () {
    console.log(`Direccion de usuario: ${this.address}`);
    console.log(`Codigo postal de usuario: ${this.postalCode}`);
  }

  addToCart() {
    console.log('agregamos al carrito siuuu');

  }
  onMouseEnter() {
    console.log('mouseEnter');

  }
  onMouseLeave() {
    console.log('mouseLeave');

  }
}
