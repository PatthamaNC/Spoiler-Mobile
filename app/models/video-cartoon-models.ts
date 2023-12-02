export class VideocartoonServiceApiResponse {
    status: string = '';
    message: string = '';
    video: Video[] = [];
}

export class VideocartoonDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    video: Video = {
        videoID: '',
        video_name:'',
        video_genra: '',
        video_subtitles:'',
        actor:  '',
        director:  '',
        videocartoon:  '',
        videoimg:  '',
    };
}

export class Video{
    videoID: string ='';
    video_name:string ='';
    video_genra: string ='';
    video_subtitles: string ='';
    actor:  string ='';
    director:  string ='';
    videocartoon:  string ='';
    videoimg:  string ='';
}