import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { PageFirstComponent } from './page-first/page-first.component';
import { PageSecondComponent } from './page-second/page-second.component';
import { PageFourComponent } from './page-four/page-four.component';
import { PageThirdComponent } from './page-third/page-third.component';
import { PageFiveComponent } from './page-five/page-five.component';
import { TableBooksComponent } from './table-books/table-books.component';



export const routesBeautiful: Routes = [
  { path: '', 
    component: BookComponent, 
    children: [
      {path:'', redirectTo:'page1', pathMatch:'full'},
      { path: 'page1', component: PageFirstComponent },
      { path: 'page2', component: PageSecondComponent },
      { path: 'page3', component: PageThirdComponent },
      { path: 'page4', component: PageFourComponent },
      { path: 'page5', component: PageFiveComponent },
      { path: 'table', component: TableBooksComponent }
]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routesBeautiful)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
