import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.scss'],
})
export class ChildHomeComponent implements OnInit {
  public newItems = []
  public recommendItems = []
  private newArrivalItems = []
  private recommendedItems = []
  private setNewArrivalItems(array){
    this.newArrivalItems.push(array)
  }
  private getNewArrivalItems(){
    return this.newArrivalItems
  }
  private setRecommendedItems(array){
    this.recommendedItems.push(array)
  }
  private getRecommendedItems(){
    return this.recommendedItems
  }
//依赖注入了俩服务对象
  constructor(private url:UrlService, private http:HttpClient) { }

  ngOnInit() {
    //组件初始化完成,异步请求首页商品数据
    this.http.get(this.url.indexApi).subscribe((res:any)=>{
      console.log(res)
      this.setNewArrivalItems(res.data.product_new)
      this.setRecommendedItems(res.data.product_recommend) 
      this.newItems = this.getNewArrivalItems()[0]
      // console.log(this.newItems)
      this.recommendItems=this.getRecommendedItems()[0]

    })
  }

}
