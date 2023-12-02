import { Injectable } from '@angular/core';
import { VideoHorrorServiceApiResponse } from '../models/video-horror-models';
import { VideoHorrorDetailServiceApiResponse } from '../models/video-horror-models';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoHorrorService {

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

  inquiryVideoHorror(): Observable<VideoHorrorServiceApiResponse> {
    console.log('call inquiryVideoCartoon function in video-service...');
    return this.httpClient
      .post<VideoHorrorServiceApiResponse>(
        this.apiUrl + 'video-horror01.php',
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


  VideoHorrorDetail(ID: string): Observable<VideoHorrorDetailServiceApiResponse> {
    console.log('call inquiryVideo function in video-service...');
    return this.httpClient
      .post<VideoHorrorDetailServiceApiResponse>(
        this.apiUrl + 'video-horror02.php',
        { VideohorrorID: ID },
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
