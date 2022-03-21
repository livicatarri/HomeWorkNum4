import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { bookInfo, bookCard, bookEdit } from './booksInterface';
import { BookInfoService } from './book-info.service';


@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.css']
})

export class TableBooksComponent implements OnInit {
  BookCard: bookCard[]=[];
  BookEdit: bookEdit[]=[];
  BookInfoPage: bookInfo[] = [];
  displayedColumns: string[] = ['id', 'title', 'qtyRelease'];
  dataSource = this.BookInfoPage;
  onClickRow?: bookInfo;
  total: number = 0

  constructor(private bookService: BookInfoService) {}

  getBooksReg(): void {
    this.bookService.getBooksReg().pipe(
      ).subscribe(books => this.BookEdit = books)
    
  }
  
  getBookIdRow():void {
    this.bookService.getBookIdRow().pipe(
      ).subscribe(books => this.BookCard = books)
  }
  

  getTotalCount(): number {
    return this.BookEdit.map(book => book.qtyRelease).reduce(( temp, value) => {
      return   temp + value;
    }, 0)
  }
  description(){}
  ngOnInit(): void {
    this.getBooksReg()
  }
 
}
