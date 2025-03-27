import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ProductsComponent } from './page/products/products.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { ClientComponent } from './layout/client/client.component';
import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ProductListComponent } from './page/admin/product-list/product-list.component';
import { ProductAddComponent } from './page/admin/product-add/product-add.component';
import { EditProductComponent } from './page/admin/product-edit/product-edit.component';

export const routes: Routes = [
  {
    path: '', component: ClientComponent, children:[
      {
        path:'', component: HomeComponent
      },
      {
        path:'about', component: AboutComponent
      },
      {
        path:'product', component: ProductsComponent
      },
      {
        path: 'product/:id', component: ProductDetailComponent
      }
    ]
  },
  {
    path: 'admin', component: AdminComponent, children:[
      { path: 'product', component: ProductListComponent},
      { path: 'product/add', component: ProductAddComponent},
      { path: 'product/list', component: ProductListComponent},
      { path: 'product/edit/:id', component: EditProductComponent}
    ]
  },
  {
    path:"**",
    component: NotfoundComponent
  }
];
