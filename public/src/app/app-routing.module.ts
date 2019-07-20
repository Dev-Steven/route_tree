import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { AuthorComponent } from './author/author.component';
import { CategoryComponent } from './category/category.component';
import { BrandComponent } from './brand/brand.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';


const routes: Routes = [
  { path: 'products', component: ProductComponent, children: [
    { path: 'details/:id', component: ProductdetailComponent },
    { path: 'brand/:brand', component: BrandComponent },
    { path: 'category/:cat', component: CategoryComponent }]
  },
  { path: 'reviews', component: ReviewComponent, children: [
    { path: 'details/:id', component: ReviewDetailComponent },
    { path: 'author/:id', component: AuthorComponent },
    { path: 'all/:id', component: AllReviewsComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
