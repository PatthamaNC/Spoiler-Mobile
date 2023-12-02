export class VideoActionServiceApiResponse {
    status: string = '';
    message: string = '';
    videoaction: Videoaction[] = [];
}

export class VideoActionDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    videoaction: Videoaction = {
        videoactionID : '',
        action_name:'',
        action_category: '',
        action_details:'',
        actor:  '',
        director:  '',
        video_action:  '',
        action_img:  '',
    };
}

export class Videoaction{
    videoactionID : string ='';
    action_name:string ='';
    action_category: string ='';
    action_details: string ='';
    actor:  string ='';
    director:  string ='';
    video_action:  string ='';
    action_img:  string ='';
}