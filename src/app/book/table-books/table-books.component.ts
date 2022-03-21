import { Component, OnInit } from '@angular/core';
import { bookCard, bookInfo, bookEdit } from './booksInterface';
import { BookInfoService } from './book-info.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-table-books',
  templateUrl: './table-books.component.html',
  styleUrls: ['./table-books.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})

export class TableBooksComponent implements OnInit {
  constructor(private booksInfoService: BookInfoService) {}

  BookInfo: bookInfo[] = [];
  getTableData: bookInfo[] = [];
  totalCount: number = 0;
  displayedColumns: string[] = ['id', 'title', 'qtyRelease'];
  description: string | null = null;
  expandedElement: null | undefined;

  getValue(): void {
    this.booksInfoService.getValue().subscribe((BookInfo) => {
      this.getTableData = BookInfo;
      this.AddSetByID();
    });
  }

  AddSetByID(): void {
    if (this.BookInfo.length != 0) {
      this.BookInfo.map((a) => Object.assign(a,this.getTableData.find((b: bookEdit) => b.id == a.id)));
    } else {
      this.BookInfo = this.getTableData;
    }
  }

  getTotalCount(): void {
    for (let i = 0; i < this.BookInfo.length; i++) {
      this.totalCount += this.BookInfo[i].qtyRelease;
    }
  }

  ngOnInit(): void {
    this.getValue();
  }

  ngDoCheck(): void {
    this.totalCount = 0;
    this.getTotalCount();
  }

  setColumn(element: string) {
    if (element == 'id') {
      return 'id книги';
    } else if (element == 'title') {
      return 'Название книги';
    } else {
      return 'Тираж';
    }
  }
}
