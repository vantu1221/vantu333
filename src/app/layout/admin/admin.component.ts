import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,  // Nếu bạn dùng Standalone Components
  imports: [RouterOutlet, RouterLink,CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'] // Sửa lại đúng cú pháp
})
export class AdminComponent {
  isCollapsed = false; // Thêm tính năng thu gọn sidebar

  constructor() {}
}
