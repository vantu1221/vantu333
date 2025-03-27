import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import IProduct from '../../../interface/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.loadProducts();
  }

  // 🛠 Lấy danh sách sản phẩm
  loadProducts() {
    this.productService.getList().subscribe(data => {
      this.products = data;
    });
  }

  // 🛠 Xóa sản phẩm
  deleteProduct(id: string) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
      this.productService.delete(id).subscribe(() => {
        this.products = this.products.filter(product => product.id !== id);
      });
    }
  }

  // 🛠 Chỉnh sửa sản phẩm
  editProduct(id: string) {
    this.router.navigate(['/admin/product/edit', id]);
  }

  // ✅ Thêm phương thức này để sửa lỗi
  addProduct() {
    this.router.navigate(['/admin/product/add']);
  }
}
