import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/books/delete-book/delete-book.component';
import { SignUpComponent } from './components/users/sign-up/sign-up.component';
import { LoginComponent } from './components/users/login/login.component';
import { AddQuoteComponent } from './components/quotes/add-quote/add-quote.component';

const routes: Routes = [
  {
    path:'',
    component: BooksListComponent
  },
  {
    path:'books',
    component: BooksListComponent
  },
  {
    path:'books/add',
    component: AddBookComponent
  },
  {
    path:'books/edit/:id',
    component: EditBookComponent
  },
  {
    path:'books/delete/:id',
    component: DeleteBookComponent
  },
  {
    path:'quotes/add',
    component: AddQuoteComponent
  },
  {
    path:'users/sign-up',
    component: SignUpComponent
  },
  {
    path:'users/login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
