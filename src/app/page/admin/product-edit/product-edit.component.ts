import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import IProduct from '../../../interface/product';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Thêm FormsModule vào đây
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class EditProductComponent implements OnInit {
  product: IProduct = {
    id: '',
    name: '',
    price: null,
    sale_price: 0,
    status: null,
    image: '',
    category: '',
    rating: 0
  };

  categories: string[] = ['Laptop', 'Điện thoại', 'Âm thanh'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.product.id = this.route.snapshot.paramMap.get('id')!;
    if (this.product.id) {
      this.loadProduct();
    }
  }

  loadProduct() {
    this.productService.getById(this.product.id).subscribe(data => {
      this.product = data;
    });
  }

  handleSubmit(form: any) {
    if (form.valid) {
      this.productService.update(this.product.id, this.product).subscribe(() => {
        alert('Cập nhật sản phẩm thành công!');
        this.router.navigate(['/admin/product']);
      });
    }
  }

  cancelEdit() {
    this.router.navigate(['/admin/product']);
  }
}
