export class ListSpoilerDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    listspoiler: Listspoiler = {
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

export class Listspoiler {
    spoilerID: string='';
    spoiler_name : string ='';
    spoiler_category : string ='';
    spoiler_details : string ='';
    spoiler_img : string ='';
    actor : string ='';
    director : string ='';
    member_id: number = 0;
    username: string ='';
    profile_pic: string ='';
  }

  export class ListSpoilerServiceApiResponse {
    status: string = '';
    message: string = '';
    listspoilers: Listspoiler[] = [];
}