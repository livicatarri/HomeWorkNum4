import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {  bookCard, BooksAllData } from './booksInterface';

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

  getBooksReg(): Observable<BooksAllData> {
    return this.http.get<BooksAllData>(this.booksUrl)
      .pipe(
        tap(_ => console.log('fetched book')),
      )
  }
  getBookIdRow(id: number): Observable<bookCard> {
    const url = `${this.booksUrl}/set2/data/${id}`;
    return this.http.get<bookCard>(url).pipe(
      tap(_ => console.log(`fetched id=${id}`)),
      catchError(this.handleError<bookCard>(`getBookIdRow id=${id}`))
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