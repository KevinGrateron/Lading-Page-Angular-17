import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productsList: IProduct[] = [];
  private _apiServices =  inject(ApiService); // injeccion de dependencia de la nueva forma 
  private router = inject(Router);
  constructor(private apiServices: ApiService){}

ngOnInit(): void {
      this.apiServices.getProducts().subscribe((data : IProduct[]) => {
        this.productsList = data;
      }) 
}
navigate(id :number){
  this.router.navigate(["product", id]);
  console.log(id);
}

}
