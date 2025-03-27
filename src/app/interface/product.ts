export default interface IProduct {
  id: string;
  name: string;
  price: number | null;
  sale_price: number;
  status: boolean | null;
  image: string;
  category: string;
  rating: number;
}

// 🔹 Dùng để thêm sản phẩm mới (không cần ID, sale_price, rating)
export type ProductAdd = Omit<IProduct, "id" | "sale_price" | "rating">;

// 🔹 Dùng khi cập nhật sản phẩm (cho phép cập nhật từng trường)
export type ProductUpdate = Partial<Omit<IProduct, "id">>;
