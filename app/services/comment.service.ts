import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'; 
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable , catchError, throwError } from 'rxjs';
import { CommentspoilerServiceApiResponse } from '../models/comment-models';
import { CommentViseoServiceApiResponse } from '../models/comment-models';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiUrl: string = 'http://localhost/csc2023/';
  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse): Observable<never>{
    if (error.error instanceof ErrorEvent){
      console.error('An error occurred:', error.error.message);
    }else {
      console.error(
        `Backend returned code ${error.status},` + `body was: ${error.error}`
      );
    }
    return throwError(() => error);
  }

  inquiryCommentSpoiler(MovieID : any ) : Observable<CommentspoilerServiceApiResponse> {
    // console.log('call inquiryMember function in member-service...');
    return this.httpClient
    .post<CommentspoilerServiceApiResponse>(
      this.apiUrl + 'inquiry-comment-spoiler.php',
      {
        MovieID: MovieID,
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

  createCommentSpoiler(
    memberId: number,
    movieId: string,
    commentMessage: string
  ) {
    console.log('call inquiryMember function in member-service');
    return this.httpClient
      .post<CommentspoilerServiceApiResponse>(
        this.apiUrl + 'create-comment-spoiler.php',
        {
          member_id: memberId,
          movie_id: movieId,
          message: commentMessage,
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
// ความคิดเห็นทั้งหมด
  inquiryCommentVideo(VideosID : any ) : Observable<CommentViseoServiceApiResponse> {
    // console.log('call inquiryMember function in member-service...');
    return this.httpClient
    .post<CommentViseoServiceApiResponse>(
      this.apiUrl + 'inquiry-comment-video.php',
      {
        VideosID: VideosID,
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
  // เขียนความคิดเห็น VDO
  createCommentVideo(
    memberId: number,
    videoId: number,
    commentMessage: string
  ) {
    console.log('call inquiryMember function in member-service');
    return this.httpClient
      .post<CommentViseoServiceApiResponse>(
        this.apiUrl + 'create-comment-video.php',
        {
          member_id: memberId,
          video_id: videoId,
          message: commentMessage,
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

  deleteComment(commentID:string) {
    return this.httpClient
    .post<CommentspoilerServiceApiResponse>(
     this.apiUrl + 'delete-comment.php',
     {
      commentID: commentID,
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
