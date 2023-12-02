import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators'; 
import { ResportVideoServiceApiResponse } from '../models/report-video-models';
@Injectable({
  providedIn: 'root'
})
export class ReportVideoService {
  apiUrl: string = 'http://localhost/csc2023/';
  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  }; 
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

    // ส่งรายงาน VDO ภาพยนตร์สปอยล์
    sendReportVideo(
      memberId: number,
      video_Id: string,
      reportReason: string
    ) : Observable<ResportVideoServiceApiResponse>{
      return this.httpClient
        .post<ResportVideoServiceApiResponse>(
          this.apiUrl + 'create-report-video.php',
          {
            member_id: memberId,
            video_id: video_Id,
            reason: reportReason
          },
          this.httpOptions
        )
        .pipe(
          tap((response) => {
            console.log(response);
          }),
          catchError(this.handleError)
        );
    }
}
