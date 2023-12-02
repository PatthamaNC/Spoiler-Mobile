import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable , catchError, throwError } from 'rxjs'; 
import { Spoiler, SpoilerDetailServiceApiResponse, SpoilerServiceApiResponse} from '../models/movie-models';
import { Member,MemberServiceApiResponse } from '../models/member-models';
import { tap } from 'rxjs/operators'; 
import { Mymovies, MymoviesDetailServiceApiResponse, MymoviesServiceApiResponse } from '../models/mymovies-modela';
import { MYSpoilerDetailServiceApiResponse, MySpoilerServiceApiResponse } from '../models/myspoiler-detail-modela';
import { Video, VideosDetailServiceApiResponse, VideosServiceApiResponse } from '../models/videos-models';
import { ListSpoilerServiceApiResponse,ListSpoilerDetailServiceApiResponse } from '../models/list-spoiler-models';
@Injectable({
  providedIn: 'root'
})
export class SpoilerServiceService {
  apiUrl: string = 'http://localhost/csc2023/';
  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  constructor( private httpClient: HttpClient) { }

  inquirySpoiler() : Observable<SpoilerServiceApiResponse> {
    console.log('call inquiryMember function in member-service...');
    return this.httpClient
    .post<SpoilerServiceApiResponse>(
      this.apiUrl + 'spoiler.php',
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
  
  inquirySpoilerSearchDetail(MovieID : any) : Observable<MySpoilerServiceApiResponse> {
    console.log('call inquiryMember function in spoiler-service...');
    return this.httpClient
    .post<MySpoilerServiceApiResponse>(
      this.apiUrl + 'spoiler-detail.php',
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

  inquiryVideos() : Observable<VideosServiceApiResponse> {
    // console.log('call inquiryMember function in member-service...');
    return this.httpClient
    .post<VideosServiceApiResponse>(
      this.apiUrl + 'videos.php',
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

  // review
    addspoiler( spoiler:Spoiler):Observable<SpoilerServiceApiResponse>{
      console.log('call addspoiler in movie-service');
      return this.httpClient
      .post<SpoilerServiceApiResponse>(
       this.apiUrl + 'create-spoiler.php',spoiler,
      //  { 
      //   member_id: member_id
      //  },
       this.httpOptions)
      .pipe(
        tap((response) => { 
          console.log('api response');
          console.log(response);
      }), 
      catchError(this.handleError)
      );
    }
    

    
    getSpoilerEdit(member_id:any):Observable<SpoilerDetailServiceApiResponse>{
      return this.httpClient
    .post<SpoilerDetailServiceApiResponse>(
     this.apiUrl + 'inquiry-spoiler.php',
     {
      Spoiler: member_id,
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

  MyMoviesDetail(ID:string):Observable<SpoilerDetailServiceApiResponse>{
    console.log('call inquiry function in member-service...');
    return this.httpClient
    .post<SpoilerDetailServiceApiResponse>(
      this.apiUrl + 'spoiler-detail.php',
      {MovieID : ID},
      this.httpOptions
      )
     .pipe(tap((response) => { 
         console.log('api response');
         console.log(response);
     }), 
     catchError(this.handleError)
     );
   }

   MySpoilerDetail(ID:string):Observable<MYSpoilerDetailServiceApiResponse>{
    // console.log('call inquiry function in spoiler-service...');
    return this.httpClient
    .post<MYSpoilerDetailServiceApiResponse>(
      this.apiUrl + 'my-spoiler-detail.php',
      {MySpoilerDetailID : ID},
      this.httpOptions
      )
     .pipe(tap((response) => { 
        //  console.log('api response');
         console.log(response);
     }), 
     catchError(this.handleError)
     );
   }

// member 
  searchmovie(searchKey:any) : Observable<SpoilerServiceApiResponse>{
    console.log('call inquiryMember function in spoiler-service...');
    console.log(searchKey)
    return this.httpClient
    .post<SpoilerServiceApiResponse>(
      this.apiUrl + 'search-spoiler.php',
      {searchKey : searchKey},
      this.httpOptions
      )
     .pipe(tap((response) => { 
         console.log('api response');
         console.log(response);
     }), 
     catchError(this.handleError)
     );
   }
// member
   searchVideos(searchKeyVideos:any) : Observable<VideosServiceApiResponse>{
    console.log('call inquiryMember function in spoiler-service...');
    console.log(searchKeyVideos)
    return this.httpClient
    .post<VideosServiceApiResponse>(
      this.apiUrl + 'search-videos.php',
      {searchKeyVideos : searchKeyVideos},
      this.httpOptions
      )
     .pipe(tap((response) => { 
         console.log('api response');
         console.log(response);
     }), 
     catchError(this.handleError)
     );
   }

   searchSpoilerUser(searchKey:any) : Observable<SpoilerServiceApiResponse>{
    console.log('call inquiryMember function in spoiler-service...');
    console.log(searchKey)
    return this.httpClient
    .post<SpoilerServiceApiResponse>(
      this.apiUrl + 'search-spoiler-user.php',
      {searchKey : searchKey},
      this.httpOptions
      )
     .pipe(tap((response) => { 
         console.log('api response');
         console.log(response);
     }), 
     catchError(this.handleError)
     );
   }

// แก้ไขภาพยนตร์สปอยล์
   EditSpoiler(mymovie:Mymovies): Observable<SpoilerDetailServiceApiResponse>  {
    return this.httpClient
    .post<SpoilerDetailServiceApiResponse>(
     this.apiUrl + 'update-spoiler.php',mymovie,
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

  deleteSpoiler(ID:any): Observable<SpoilerServiceApiResponse> {
    return this.httpClient
    .post<SpoilerServiceApiResponse>(
     this.apiUrl + 'delete-spoiler.php',
     {
      spoiler_id: ID
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

  // my-movies
  myMovies(member_id : number): Observable<MymoviesServiceApiResponse> {
    return this.httpClient
    .post<MymoviesServiceApiResponse>(
     this.apiUrl + 'my-movies.php',
     {
      MyMovies: member_id,
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
    // my-movies
    myMoviesEdit(spoilerID : number): Observable<MymoviesDetailServiceApiResponse> {
      return this.httpClient
      .post<MymoviesDetailServiceApiResponse>(
       this.apiUrl + 'my-movies-edit.php',
       {
        MyMoviesEdit: spoilerID,
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

  AddMyMovies(spoiler_id:any, member_id : any ) : Observable<MymoviesServiceApiResponse>{
    return this.httpClient
    .post<MymoviesServiceApiResponse>(
     this.apiUrl + 'create-my-movies.php',
     {
      member_id: member_id,
      Spoiler:spoiler_id
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
  // spoiler action (แบบเขียน)
  SpoilerAction() : Observable<ListSpoilerServiceApiResponse> {
    return this.httpClient
    .post<ListSpoilerServiceApiResponse>(
      this.apiUrl + 'list-SpoiAC.php',
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

   // spoiler horror (แบบเขียน)
   SpoilerHorror() : Observable<ListSpoilerServiceApiResponse> {
    return this.httpClient
    .post<ListSpoilerServiceApiResponse>(
      this.apiUrl + 'list-SpoHor.php',
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
     // spoiler cartoon (แบบเขียน)
     SpoilerCartoon() : Observable<ListSpoilerServiceApiResponse> {
      return this.httpClient
      .post<ListSpoilerServiceApiResponse>(
        this.apiUrl + 'list-SpoCar.php',
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
     // spoiler romantic (แบบเขียน)
     SpoilerRomantic() : Observable<ListSpoilerServiceApiResponse> {
      return this.httpClient
      .post<ListSpoilerServiceApiResponse>(
        this.apiUrl + 'list-SpoRoman.php',
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

    // รายละเอียด VDO [ดึง ID spoiler งานเขียน]
    ListSpoilerDetail(ID: any) : Observable<ListSpoilerDetailServiceApiResponse> {
      return this.httpClient
      .post<ListSpoilerDetailServiceApiResponse>(
        this.apiUrl + 'list-spoiler-detail.php',
        { ListSpoilerID: ID },
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
