import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";

import {Book,books} from "../books";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{

book : Book | undefined

constructor(private activatedRoute: ActivatedRoute){

}

// lifecycle hook
ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.activatedRoute.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('book-id'));

  // Find the product that correspond with the id provided in route.
  this.book = books.find(book=> book.id === productIdFromRoute);
}

}
