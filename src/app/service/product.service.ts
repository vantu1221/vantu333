import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IProduct, { ProductAdd } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  // 📌 Lấy danh sách sản phẩm
  getList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }

  // 📌 Lấy thông tin sản phẩm theo ID
  getById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/${id}`);
  }

  // 📌 Thêm sản phẩm mới
  add(data: ProductAdd): Observable<IProduct> {
    return this.http.post<IProduct>(this.url, data);
  }

  // 📌 Cập nhật sản phẩm
  update(id: string, data: Partial<IProduct>): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.url}/${id}`, data);
  }

  // 📌 Xóa sản phẩm
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
