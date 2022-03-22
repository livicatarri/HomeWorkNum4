import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError,  concat,  Observable, of, tap } from 'rxjs';
import {bookInfo } from './booksInterface';


@Injectable({
  providedIn: 'root'
})
export class  BookInfoService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }
  urlEdit: string = 'api/bookEdit';
  urlCard: string = 'api/bookCard';

  getValue(): Observable<bookInfo[]> {
    return concat(
        this.http.get<bookInfo[]>(this.urlCard).pipe(),
        this.http.get<bookInfo[]>(this.urlEdit).pipe()
      ).pipe(
        tap(_ => console.log('fetched set data of books')),
        catchError(this.handleError<bookInfo[]>('get', []))
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