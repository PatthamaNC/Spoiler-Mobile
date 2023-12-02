import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Spoiler, SpoilerServiceApiResponse } from '../models/movie-models';
import { Member, MemberDetailServiceApiResponse, MemberServiceApiResponse,MemberstatusDetailServiceApiResponse } from '../models/member-models';
import { tap } from 'rxjs/operators';
import { ForgorPass, ForgorPassDetailServiceApiResponse, ForgotPassServiceApiResponse } from '../models/forgotpass-models';


@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {
  apiUrl: string = 'http://localhost/csc2023/';
  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  // inquirySpoiler() : Observable<SpoilerServiceApiResponse> {
  //   console.log('call inquiryMember function in member-service...');
  //   return this.httpClient
  //   .post<SpoilerServiceApiResponse>(
  //     this.apiUrl + 'spoiler.php',
  //     null,
  //     this.httpOptions
  //     )
  //   .pipe(
  //     tap((response) => { 
  //       // console.log('api response');
  //       // console.log(response);
  //   }), 
  //   catchError(this.handleError)
  //   );
  // }
  //   addspoiler(spoiler:Spoiler):Observable<SpoilerServiceApiResponse>{
  //     console.log('call addspoiler in movie-service');
  //     return this.httpClient
  //     .post<SpoilerServiceApiResponse>(
  //      this.apiUrl + 'create-spoiler.php',spoiler,
  //      this.httpOptions)
  //     .pipe(
  //       tap((response) => { 
  //         console.log('api response');
  //         console.log(response);
  //     }), 
  //     catchError(this.handleError)
  //     );
  //   }
  inquiryMember(): Observable<MemberServiceApiResponse> {
    console.log('call inquiryMember function in member-service...');
    return this.httpClient
      .post<MemberServiceApiResponse>(
        this.apiUrl + 'member.php',
        null,
        this.httpOptions
      )
      .pipe(
        tap((response) => {
          // console.log('api response');
          // console.log(response);
        }),
        catchError(this.handleError)
      );
  }
  addMember(member: Member): Observable<MemberServiceApiResponse> {
    console.log('call addspoiler  ');
    return this.httpClient
      .post<MemberServiceApiResponse>(
        this.apiUrl + 'create-member.php', member,
        this.httpOptions)
      .pipe(
        tap((response) => {
          console.log('api response');
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }

  loginMember(Email: string, Password: string): Observable<MemberstatusDetailServiceApiResponse> {
    return this.httpClient
      .post<MemberstatusDetailServiceApiResponse>(
        this.apiUrl + 'login-member.php',
        {
          email: Email,
          password: Password,
        },
        this.httpOptions)
      .pipe(
        tap((response) => {
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }

  getMemberDetail(memberID: any) {
    return this.httpClient
      .post<MemberDetailServiceApiResponse>(
        this.apiUrl + 'inquiry-member.php',
        {
          member_id: memberID,
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
  updateMember(member: Member) {
    return this.httpClient
      .post<MemberDetailServiceApiResponse>(
        this.apiUrl + 'update-member.php', member,
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

  //  ลืมรหัสผ่าน
  forgetPasswordByEmail(Email: any): Observable<MemberDetailServiceApiResponse> {
    return this.httpClient
      .post<MemberDetailServiceApiResponse>(
        this.apiUrl + 'forget_passwordByEmail.php',
        {
          email: Email
        },
        this.httpOptions)
      .pipe(
        tap((response) => {
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }


  // comfirmPassword
  comfirmPassword(Member_id: any): Observable<ForgorPassDetailServiceApiResponse> {
    return this.httpClient
      .post<ForgorPassDetailServiceApiResponse>(
        this.apiUrl + 'comfirm-password.php',
        {
          member_id: Member_id
        },
        this.httpOptions)
      .pipe(
        tap((response) => {
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }
  // สมัครสมาชิกโดยมีชื่อผูเ้ใช้อยู่แล้ว
  registerByusername(Username: any): Observable<MemberDetailServiceApiResponse> {
    return this.httpClient
      .post<MemberDetailServiceApiResponse>(
        this.apiUrl + 'register-Byusername.php',
        {
          username: Username
        },
        this.httpOptions)
      .pipe(
        tap((response) => {
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }
  // resetPassword
  resetPassword(Member_id: any, Password: any): Observable<ForgorPassDetailServiceApiResponse> {
    return this.httpClient
      .post<ForgorPassDetailServiceApiResponse>(
        this.apiUrl + 'reset-password.php',
        {
          member_id: Member_id,
          password: Password
        },
        this.httpOptions)
      .pipe(
        tap((response) => {
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }


  // ลบตารางลืมรหัสผ่าน
  deleteForgetPassword(ID: any): Observable<ForgorPassDetailServiceApiResponse> {
    return this.httpClient
      .post<ForgorPassDetailServiceApiResponse>(
        this.apiUrl + 'delete-ForgetPass.php',
        {
          member_id: ID,
        },
        this.httpOptions)
      .pipe(
        tap((response) => {
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }

  addForgetPass(
    id: number,
    eMail: string
  ): Observable<ForgotPassServiceApiResponse> {
    return this.httpClient
      .post<ForgotPassServiceApiResponse>(
        this.apiUrl + 'create-forget-pass.php',
        {
          member_id: id,
          email: eMail
        },
        this.httpOptions)
      .pipe(
        tap((response) => {
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }

  // แก้ำไขรหัสผ่าน
  EditPassword(Password: string, IDMember: number): Observable<ForgotPassServiceApiResponse> {
    return this.httpClient
      .post<ForgotPassServiceApiResponse>(
        this.apiUrl + 'edit-password.php',
        {
          id: IDMember,
          password: Password
        },
        this.httpOptions)
      .pipe(
        tap((response) => {
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }
  // ดึงID
  selectMemberByID(ID: any): Observable<MemberDetailServiceApiResponse> {
    return this.httpClient
      .post<MemberDetailServiceApiResponse>(
        this.apiUrl + 'select-memberByID.php',
        {
          id: ID
        },
        this.httpOptions)
      .pipe(
        tap((response) => {
          console.log(response);
        }),
        catchError(this.handleError)
      );
  }


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
}

