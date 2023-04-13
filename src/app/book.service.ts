import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './books';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  items: Book[] = [];
  /* . . . */
  
  constructor(private http : HttpClient){}
  
  getReview() {
    return this.http.get<{name: string, review: string}[]>('/assets/review.json');
  }
  
  // addToCart(product: Product) {
  //   this.items.push(product);
  // }
  
  getItems() {
    return this.items;
  }
  
  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }


}
