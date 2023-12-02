import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { tap } from 'rxjs/operators'; 
import { ResportspoilerServiceApiResponse } from '../models/report_poiler-models';
import { ResportCommentServiceApiResponse } from '../models/report-comment-models';

@Injectable({
  providedIn: 'root'
})
export class ReportSpoilerService {
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

  inquiryReportSpoiler(reportspoilerID : any ) : Observable<ResportspoilerServiceApiResponse> {
    console.log('call inquiryMember function in member-service...');
    return this.httpClient
    .post<ResportspoilerServiceApiResponse>(
      this.apiUrl + 'inquiry-report-spoiler.php',
      {
        reportspoilerID: reportspoilerID,
      },
      this.httpOptions
    )
    .pipe(
      tap((response) => { 
        // console.log('api response');
        console.log(response);
    }), 
    catchError(this.handleError)
    );
  }
  
  // ส่งรายงานภาพยนตร์สปอยล์
   sendReportSpoiler(
    memberId: number,
    spoilerId: string,
    reportReason: string
  ) {
    console.log('call inquiryMember function in reposrt-service');
    return this.httpClient
      .post<ResportspoilerServiceApiResponse>(
        this.apiUrl + 'create-report-spoiler.php',
        {
          member_id: memberId,
          spoiler_id: spoilerId,
          reason: reportReason
        },
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

  inquiryReportComment(reportcommentID : any ) : Observable<ResportCommentServiceApiResponse> {
    console.log('call inquiryReport function in report-service...');
    return this.httpClient
    .post<ResportCommentServiceApiResponse>(
      this.apiUrl + 'inquiry-report-comment.php',
      {
        reportcommentID : reportcommentID,
      },
      this.httpOptions
    )
    .pipe(
      tap((response) => { 
        // console.log('api response');
        console.log(response);
    }), 
    catchError(this.handleError)
    );
  }
  // Report หน้าค้นหา mymovie-two
  sendReportComment(
    memberId: number,
    commentId: number,
    reportReason: string

  ): Observable<ResportCommentServiceApiResponse> {
    console.log('call inquiryReport function in report-service');
    return this.httpClient
      .post<ResportCommentServiceApiResponse>(
        this.apiUrl + 'create-report-comment.php',
        {
          member_id: memberId,
          comment_id: commentId,
          reason: reportReason
        },
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
    // Report หน้าVDO
    sendReportCommentVideo(
      memberId: number,
      commentId: number,
      reportReason: string
  
    ) {
      console.log('call inquiryReport function in report-service');
      return this.httpClient
        .post<ResportCommentServiceApiResponse>(
          this.apiUrl + 'create-report-comment-video.php',
          {
            member_id: memberId,
            comment_id: commentId,
            reason: reportReason
          },
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
