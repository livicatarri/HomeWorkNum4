import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { bookInfo } from '../booksInterface';
import { BookInfoService } from '../book-info.service';


@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.css']
})

export class TableBooksComponent implements OnInit {
  BookInfoPage: bookInfo[] = [];
  displayedColumns: string[] = ['id', 'title', 'qtyRelease'];
  dataSource = this.BookInfoPage;
  onClickRow?: bookInfo;
  total: number = 0

  constructor(private bookService: BookInfoService) {}

  getBooksReg(): void {
    this.bookService.getBooksReg().pipe(
      map(books => {
        const setDescr = books.set1.data;
        const setEdit = books.set2.data;
        return ({setDescr, setEdit});
      }),
      map(({setDescr, setEdit}) => {

        const BookInfoPage: bookInfo[] = []
        for (let i = 0; i < setDescr.length; i++) {
          if (setDescr[i].id===setEdit[i].id){
          BookInfoPage[i] = {
            id: setDescr[i].id,
            title: setDescr[i].title,
            description: setDescr[i].description,
            releaseDate: setEdit[i].releaseDate,
            qtyRelease: setEdit[i].qtyRelease
          }
        }
      }
        return  BookInfoPage;
      
      })
    ).subscribe(books => this.BookInfoPage = books)
  }
  getTotalCount(): number {
    return this.BookInfoPage.map(book => book.qtyRelease).reduce(( temp, value) => {
      return   temp + value;
    }, 0)
  }
  description(){}
  ngOnInit(): void {
    this.getBooksReg()
  }
 
}
