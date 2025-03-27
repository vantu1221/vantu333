import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import IProduct from '../../interface/product';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  // B1: Tạo file db.json và copy nội dung
  // B2: Tạo product service: ng g s service/product --skip-tests
  // B3: Khai báo provideHttpClient() trong app.config.ts
  // B4: product service: getList()
  // B5: Nhận data trong home page thông qua subscribe({next,error,complete})

  products: IProduct[] = []

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getList().subscribe({
      next: (data)=>{
        // console.log(data);
        this.products = data
      },
      error: (err) =>{
        console.log(err);
      },
      complete: () =>{
        console.log("Hoàn thành");
      }
    })
       
  }
}
