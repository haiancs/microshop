import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  public host = 'http://demo.rageframe.com/'
  public indexApi = this.host + 'api/tiny-shop/v1/index/index'
  public productListApi = this.host + 'api/tiny-shop/v1/product/product/index?is_new=1&page='

  constructor() { }
}
