import { Injectable } from '@angular/core';
import { VideoRomanticServiceApiResponse } from '../models/video-romantic-models';
import { VideoRomanticDetailServiceApiResponse } from '../models/video-romantic-models';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VideoRomanticService {

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
  inquiryVideoRomantic(): Observable<VideoRomanticServiceApiResponse> {
    console.log('call inquiryVideoCartoon function in video-service...');
    return this.httpClient
      .post<VideoRomanticServiceApiResponse>(
        this.apiUrl + 'video-romantic01.php',
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


  VideoRomanticDetail(ID: string): Observable<VideoRomanticDetailServiceApiResponse> {
    console.log('call inquiryVideoCartoon function in video-service...');
    return this.httpClient
      .post<VideoRomanticDetailServiceApiResponse>(
        this.apiUrl + 'video-romantic02.php',
        { VideoromanticID: ID },
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
