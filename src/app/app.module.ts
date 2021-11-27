import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { PersonComponent } from './person/person.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import {  CategoryComponent} from './category/category.component';
import {MessageComponent} from './message/message.component';
import {CartComponent} from './cart/cart.component';
import { HttpClientModule} from '@angular/common/http';
import { ChildHomeComponent } from './child-home/child-home.component';
import { ClothesComponent } from './clothes/clothes.component';
import { SkirtComponent } from './skirt/skirt.component';

const routes = [
  {path:'',redirectTo:'index',pathMatch:'full'},
  { path:'index',
    component:IndexComponent,
    children:[
      {path:'',redirectTo:'child-index',pathMatch:'full'},

      {path:'child-index', component:ChildHomeComponent },
      {path:'clothes', component:ClothesComponent },
      {path:'skirt', component:SkirtComponent },
      {path:'**',component:NotFoundComponent}
    ]
  },
  {path:'category', component:CategoryComponent },
  {path:'message', component:MessageComponent },
  {path:'cart', component:CartComponent },
  {path:'person', component:PersonComponent },
  {path:'main', component:MainComponent },
  {path:'product-detail/:pid',component:ProductDetailComponent},
  {path:'**', component:NotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CategoryComponent,
    MessageComponent,
    CartComponent,
    PersonComponent,
    MainComponent,
    ProductDetailComponent,
    NotFoundComponent,
    ChildHomeComponent,
    ClothesComponent,
    SkirtComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
