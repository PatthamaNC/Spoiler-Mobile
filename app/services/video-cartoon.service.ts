import { Injectable } from '@angular/core';
import { Video, VideocartoonServiceApiResponse } from '../models/video-cartoon-models';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { VideocartoonDetailServiceApiResponse } from '../models/video-cartoon-models';

@Injectable({
  providedIn: 'root'
})
export class VideoCartoonServiceser {

  apiUrl: string = 'http://localhost/csc2023/';
  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };
  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status},` + `body was: ${error.error}`
      );
    }
    return throwError(() => error);
  }


  constructor(private httpClient: HttpClient) { }
  inquiryVideoCartoon(): Observable<VideocartoonServiceApiResponse> {
    console.log('call inquiryVideoCartoon function in video-service...');
    return this.httpClient
      .post<VideocartoonServiceApiResponse>(
        this.apiUrl + 'video-cartoon01.php',
        null,
        this.httpOptions
      )
      .pipe(
        tap((response) => {
          console.log('api response');
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }


  VideoCartoonDetail(ID: number): Observable<VideocartoonDetailServiceApiResponse> {
    // console.log('call inquiryVideoCartoon function in video-service...');
    return this.httpClient
      .post<VideocartoonDetailServiceApiResponse>(
        this.apiUrl + 'video-cartoon02.php',
        { VideoID: ID },
        this.httpOptions
      )
      .pipe(tap((response) => {
        console.log('api response');
        console.log(response);
      }),
        catchError(this.handleError)
      );
  }
}
