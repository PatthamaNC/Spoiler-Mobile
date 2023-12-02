export class SpoilerServiceApiResponse {
    status: string = '';
    message: string = '';
    myspoilerdetail: Myspoilerdetail[] = [];
}

export class Myspoilerdetail{
    spoilerID: string ='';
    spoiler_name:string ='';
    spoiler_category: string ='';
    spoiler_details: string ='';
    spoiler_img:  string ='';
    actor:  string ='';
    director:  string ='';
    member_id: number = 0;
}

export class MYSpoilerDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    myspoilerdetail: Myspoilerdetail = {
        spoilerID: '',
        spoiler_name:'',
        spoiler_category: '',
        spoiler_details:'',
        spoiler_img:  '',
        actor:'', 
        director:'',
        member_id: 0,
    };
}


export class MySpoilerServiceApiResponse {
    status: string = '';
    message: string = '';
    Myspoilers: MySpoiler[] = [];
}
export class MySpoiler {
    spoilerID: string ='';
    spoiler_name:string ='';
    spoiler_category: string ='';
    spoiler_details: string ='';
    spoiler_img:  string ='';
    actor:  string ='';
    director:  string ='';
    member_id: number = 0;
    username: string = '';
    profile_pic: string = '';
}

