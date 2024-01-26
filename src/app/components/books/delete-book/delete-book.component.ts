import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent  implements OnInit{

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
  deleteBook(id: string){
    this.bookService.deleteBook(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['books']);
      }
    })
  }
}
