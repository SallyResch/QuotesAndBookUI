import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})

export class BooksListComponent implements OnInit{
  books: Book[]=[
    {
      id:'1',
      title: 'Emil i Lönneberga',
      author: "Astrid Lindgren",
      genre: "barnböcker",
      published: 1994
    },
    {
      id:'2',
      title: 'Baltasar i Lönneberga',
      author: "Bastrid Lindgren",
      genre: "barnböcker",
      published: 1994
    },
    {
      id:'3',
      title: 'Nisse i Lönneberga',
      author: "Kastrid Lindgren",
      genre: "barnböcker",
      published: 1994
    },
    {
      id:'4',
      title: 'Kajsa i Lönneberga',
      author: "Tastrid Lindgren",
      genre: "barnböcker",
      published: 1994
    },
  ];

  constructor(){}
  ngOnInit(): void {
      // this.books.push()
  }

}
