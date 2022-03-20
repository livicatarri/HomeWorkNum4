import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { PageFirstComponent } from './page-first/page-first.component';
import { PageSecondComponent } from './page-second/page-second.component';
import { PageThirdComponent } from './page-third/page-third.component';
import { PageFourComponent } from './page-four/page-four.component';
import { PageFiveComponent } from './page-five/page-five.component';
import { BookRoutingModule } from './book-routing.module';
import { PaginatorTerminatorComponent } from './paginator-terminator/paginator-terminator.component';
import { TableBooksComponent } from './table-books/table-books.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    BookComponent,
    PageFirstComponent,
    PageSecondComponent,
    PageThirdComponent,
    PageFourComponent,
    PageFiveComponent,
    PaginatorTerminatorComponent,
    TableBooksComponent
    
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    HttpClientModule,
  ],
  exports: [
  ]
})
export class BookModule { }
