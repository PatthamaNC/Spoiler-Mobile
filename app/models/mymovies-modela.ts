export class MymoviesServiceApiResponse {
    status: string = '';
    message: string = '';
    mymovies: Mymovies[] = [];
}

export class MymoviesDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    mymovie: Mymovies = {
        username : '',
        spoiler_name :'',
        spoiler_category : '',
        spoiler_details :'',
        spoiler_img : '',
        actor:'', 
        director:'',
        member_id:'',
        spoilerID:''
    };
}

export class Mymovies {
    username : string ='';
    spoiler_name : string ='';
    spoiler_category : string ='';
    spoiler_details : string ='';
    spoiler_img : string ='';
    actor : string ='';
    director : string ='';
    member_id:string ='';
    spoilerID :string ='';
  }