export class SpoilerServiceApiResponse {
    status: string = '';
    message: string = '';
    spoiler: Spoiler[] = [];
    video : VideoSearch[];
}

export class SpoilerDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    spoiler: Spoiler = {
        spoilerID: '',
        spoiler_name:'',
        spoiler_category: '',
        spoiler_details:'',
        spoiler_img:  '',
        actor:'', 
        director:'',
        member_id: 0,
        username:'',
        profile_pic:'',
        
    };
}

export class Spoiler{
    spoilerID: string ='';
    spoiler_name:string ='';
    spoiler_category: string ='';
    spoiler_details: string ='';
    spoiler_img:  string ='';
    actor:  string ='';
    director:  string ='';
    member_id: number = 0;
    username:string='';
    profile_pic:string = ''
}
export class Comment {
    id: number = 0;
    member_id: number = 0;
    content_id: number = 0;
    title: string = '';
    message: string = '';
    created_at: Date = new Date();
    fname: string = '';
    lname: string = '';
    profile_pic: string = '';
  }

  export class VideoSearch{
    videosID: string ='';
    name:string ='';
    category: string ='';
    details: string ='';
    actor:  string ='';
    director:  string ='';
    videos:string='';
    img:  string =''
}