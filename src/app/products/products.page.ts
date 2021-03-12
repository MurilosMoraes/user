import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products = true;
  question = false;

  constructor() { }

  ngOnInit() {
  }

  showQuestion(){
    this.products = false;
    this.question = true;
  }

}
