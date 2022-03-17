import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BookComponent } from './book/book.component';
import { PageFirstComponent } from './page-first/page-first.component';
import { PageSecondComponent } from './page-second/page-second.component';
import { PageThirdComponent } from './page-third/page-third.component';
import { PageFourComponent } from './page-four/page-four.component';
import { PageFiveComponent } from './page-five/page-five.component';
import { BookRoutingModule } from './book-routing.module';
import { PaginatorTerminatorComponent } from './paginator-terminator/paginator-terminator.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BookComponent,
    PageFirstComponent,
    PageSecondComponent,
    PageThirdComponent,
    PageFourComponent,
    PageFiveComponent,
    PaginatorTerminatorComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  exports: [
    /*HeaderComponent,
    BookComponent,
    PageFirstComponent,
    PageSecondComponent,
    PageThirdComponent,
    PageFourComponent,
    PageFiveComponent*/
  ]
})
export class BookModule { }
