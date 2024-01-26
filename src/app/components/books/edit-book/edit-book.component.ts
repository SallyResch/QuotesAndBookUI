import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})


export class EditBookComponent implements OnInit {

  bookDetails: Book ={
    id: '',
    title: '',
    author: '',
    genre: '',
    published: 0,
  };

  constructor(private route: ActivatedRoute, private bookService: BooksService, private router: Router){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id = params.get('id');
        
      if(id) {
        this.bookService.getBook(id)
        .subscribe({
          next: (response) =>{
            this.bookDetails=response;
          }
        });
        }
      }
    })
  }

  updateBook(){
    this.bookService.updateBook(this.bookDetails.id, this.bookDetails)
    .subscribe({
      next: (book) => {
        this.router.navigate(['books']);
      }
    })
  }
  deleteBook(id: string){
    this.bookService.deleteBook(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['books']);
      }
    })
  }
}
