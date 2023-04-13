import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';


@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent implements OnInit{

  reviews!: Observable<{ name: string, review: string }[]>;

  ngOnInit(): void {
    this.reviews =  this.bookService.getReview();
  }

constructor(private bookService: BookService) { }

}
