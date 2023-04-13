import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent implements OnInit{

  review!: Observable<{ name: string, review: string }[]>;

  ngOnInit(): void {
    this.review =  this.cartService.getShippingPrices();
  }

constructor(private cartService: CartService) { }

}
