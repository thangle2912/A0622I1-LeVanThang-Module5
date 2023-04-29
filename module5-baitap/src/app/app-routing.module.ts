import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DictionaryComponent} from './ss7_service_router/dictionary/dictionary/dictionary.component';
import {DictionaryDetailComponent} from './ss7_service_router/dictionary/dictionary-detail/dictionary-detail.component';
import {ProductListComponent} from './ss7_service_router/product/product-list/product-list.component';
import {ProductCreateComponent} from './ss7_service_router/product/product-create/product-create.component';
import {ProductEditComponent} from './ss7_service_router/product/product-edit/product-edit.component';


const routes: Routes = [
  {path: 'word', component: DictionaryComponent},
  {path: 'word/detail/:id', component: DictionaryDetailComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/edit/:id', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
