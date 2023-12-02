import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable , catchError, throwError } from 'rxjs'; 
import { tap } from 'rxjs/operators';
import { VideosDetailServiceApiResponse } from '../models/videos-models';

@Injectable({
  providedIn: 'root'
})
export class MyMoviesService {
  apiUrl: string = 'http://localhost/csc2023/';
  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  }

  constructor(private httpClient: HttpClient) { }
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
  VideoVideoDetail(ID: any): Observable<VideosDetailServiceApiResponse> {
    return this.httpClient
      .post<VideosDetailServiceApiResponse>(
        this.apiUrl + 'search-videos-detail.php',
        { VideosID: ID },
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
