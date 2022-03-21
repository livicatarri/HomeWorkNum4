import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {  bookCard, bookInfo, bookEdit } from './booksInterface';

@Injectable({
  providedIn: 'root'
})
export class  BookInfoService {
  private booksUrl = 'api/booksDB'; 

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }// делала как в туториале 6 часть 
  urlBook: string = 'api/bookEdit';
  urlCard: string = 'api/bookCard';

  
getBookIdRow(): Observable<bookCard[]> {
  return this.http.get<bookCard[]>(this.urlCard).pipe(
      tap(_ => console.log('fetched second set data of books')),
      catchError(this.handleError<bookCard[]>('getSetOne', []))
  )
}
getBooksReg(): Observable<bookEdit[]> {
  return this.http.get<bookEdit[]>(this.urlBook).pipe(
      tap(_ => console.log('fetched first set data of books')),
      catchError(this.handleError<bookEdit[]>('getSetTwo', []))
  )
}


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}