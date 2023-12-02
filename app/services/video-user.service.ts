import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

import { VideoActionDetailServiceApiResponse } from '../models/video-action-models';

import { VideocartoonDetailServiceApiResponse } from '../models/video-cartoon-models';

import { VideoRomanticDetailServiceApiResponse } from '../models/video-romantic-models';

import { VideoHorrorDetailServiceApiResponse } from '../models/video-horror-models';
import { VideosDetailServiceApiResponse, VideosServiceApiResponse } from '../models/videos-models';
@Injectable({
  providedIn: 'root'
})
export class VideoUserService {
  apiUrl: string = 'http://localhost/csc2023/';
  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };
  constructor( private httpClient: HttpClient) { }

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
// VDO User
VideoActionUser() : Observable<VideoActionDetailServiceApiResponse> {
  return this.httpClient
  .post<VideoActionDetailServiceApiResponse>(
    this.apiUrl + 'video-action-user.php',
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
// VDO User
  VideoCartoonUser() : Observable<VideocartoonDetailServiceApiResponse> {
    return this.httpClient
    .post<VideocartoonDetailServiceApiResponse>(
      this.apiUrl + 'video-cartoon-user.php',
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

  VideoRomanticUser() : Observable<VideoRomanticDetailServiceApiResponse> {
    return this.httpClient
    .post<VideoRomanticDetailServiceApiResponse>(
      this.apiUrl + 'video-romantic-user.php',
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

  VideoHorrorUser() : Observable<VideoHorrorDetailServiceApiResponse> {
    return this.httpClient
    .post<VideoHorrorDetailServiceApiResponse>(
      this.apiUrl + 'video-horror-user.php',
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
// VDO แอ็คชัน 5 เรื่อง
  VideoAction() : Observable<VideosServiceApiResponse> {
    return this.httpClient
    .post<VideosServiceApiResponse>(
      this.apiUrl + 'videos-action.php',
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

  // VDO การ์ตูน 5 เรื่อง
  VideoCartoon() : Observable<VideosServiceApiResponse> {
    return this.httpClient
    .post<VideosServiceApiResponse>(
      this.apiUrl + 'videos-cartoon.php',
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
    // VDO สยองขวัญ 5 เรื่อง
    VideoHorror() : Observable<VideosServiceApiResponse> {
      return this.httpClient
      .post<VideosServiceApiResponse>(
        this.apiUrl + 'videos-horror.php',
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
      // VDO โรแมนติก 5 เรื่อง
  VideoRomantic() : Observable<VideosServiceApiResponse> {
    return this.httpClient
    .post<VideosServiceApiResponse>(
      this.apiUrl + 'videos-romantic.php',
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
  // รายละเอียด VDO [ดึง ID VDO 5 เรื่อง]
  VideosDetail(ID: any) : Observable<VideosDetailServiceApiResponse> {
    return this.httpClient
    .post<VideosDetailServiceApiResponse>(
      this.apiUrl + 'videos-detail.php',
      { VideosID: ID },
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
}
