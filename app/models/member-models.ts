export class MemberServiceApiResponse {
    status: string = '';
    message: string = '';
    member: Member[] = [];
}
export class Member{
    id: number = 0 ;
    username: string = '';
    fname:string= '';
    lname: string = '';
    email: string = '';
    password: string = '';
    profile_pic: string = '';
}
export class MemberDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    member: Member = {
        id: 0,
        username:  '',
        fname: '',
        lname:  '',
        email:  '',
        password:  '',
        profile_pic:'',
    };
}

export class Memberstatus{
    id: number = 0 ;
    username: string = '';
    fname:string= '';
    lname: string = '';
    email: string = '';
    password: string = '';
    profile_pic: string = '';
    status: string = '';
}
export class MemberstatusDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    memberstatus: Memberstatus = {
        id: 0,
        username:  '',
        fname: '',
        lname:  '',
        email:  '',
        password:  '',
        profile_pic:'',
        status:'',
    };
}
