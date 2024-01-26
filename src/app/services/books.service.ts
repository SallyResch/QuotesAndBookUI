import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/books.service';
import {Book} from '../models/book.model';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  //Connection to fetching data from database
  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.baseApiUrl + '/api/books');
  }

  addBook(addBookRequest:Book): Observable<Book> {
    addBookRequest.id= '00000000-0000-0000-0000-000000000000'
    return this.http.post<Book>(this.baseApiUrl + '/api/books', addBookRequest);
  }

  getBook(id: string): Observable<Book>{
   return this.http.get<Book>(this.baseApiUrl + '/api/books/' + id);
  }

  updateBook(id: string, updateBookRequest: Book): Observable<Book>{
  return this.http.put<Book>(this.baseApiUrl + '/api/books/' + id, updateBookRequest);
  }

  deleteBook(id: string): Observable<Book>{
    return this.http.delete<Book>(this.baseApiUrl + '/api/books/' + id);
    }
}