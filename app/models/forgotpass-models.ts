export class ForgotPassServiceApiResponse {
    status: string = '';
    message: string = '';
    forgorPass: ForgorPass[] = [];
}
export class ForgorPass{
    forgotpasswordID :number = 0 ;
    email: string = '';
    member_id: string = '';
    comfirmPassword: string = '';
}
export class ForgorPassDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    forgorPass: ForgorPass = {
        forgotpasswordID: 0,
        email:  '',
        member_id: '',
        comfirmPassword:  ''
    };

}

// export class ForgotUserServiceApiResponse {
//     status: string = '';
//     message: string = '';
//     forgorUser: ForgorUser[] = [];
// }
// export class ForgorUser{
//     forgotusernameID :number = 0 ;
//     username: string = '';
//     member_id: string = '';
//     comfirmUsername: string = '';
// }
// export class ForgorUserDetailServiceApiResponse {
//     status: string = '';
//     message: string = '';
//     forgorUser: ForgorUser = {
//         forgotusernameID: 0,
//         username:  '',
//         member_id: '',
//         comfirmUsername:  ''
//     };

// }
