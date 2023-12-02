import { Injectable } from '@angular/core';
import { VideoActionServiceApiResponse } from '../models/video-action-models';
import { VideoActionDetailServiceApiResponse } from '../models/video-action-models';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class VideoActionService {

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

  inquiryVideoAction(): Observable<VideoActionServiceApiResponse> {
    console.log('call inquiryVideoCartoon function in video-service...');
    return this.httpClient
      .post<VideoActionServiceApiResponse>(
        this.apiUrl + 'video-action01.php',
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


  VideoActionDetail(ID: string): Observable<VideoActionDetailServiceApiResponse> {
    console.log('call inquiryVideoCartoon function in video-service...');
    return this.httpClient
      .post<VideoActionDetailServiceApiResponse>(
        this.apiUrl + 'video-action02.php',
        { VideoactionID: ID },
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
