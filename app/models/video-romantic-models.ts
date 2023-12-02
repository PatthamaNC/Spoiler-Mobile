export class VideoRomanticServiceApiResponse {
    status: string = '';
    message: string = '';
    videoromantic: videoromantic[] = [];
}

export class VideoRomanticDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    videoromantic: videoromantic = {
        videoromanticID: '',
        romantic_name:'',
        romantic_category: '',
        romantic_details:'',
        actor:  '',
        director:  '',
        video_romantic:  '',
        romantic_img:  '',
    };
}

export class videoromantic{
    videoromanticID: string ='';
    romantic_name:string ='';
    romantic_category: string ='';
    romantic_details: string ='';
    actor:  string ='';
    director:  string ='';
    video_romantic:  string ='';
    romantic_img:  string ='';
}