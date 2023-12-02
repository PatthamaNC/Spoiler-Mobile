
export class VideosServiceApiResponse {
    status: string = '';
    message: string = '';
    videos: Video[] = [];
}
export class VideosDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    video: Video = {
        videosID: '',
        name:'',
        category: '',
        details:'',
        actor:'', 
        director:'',
        videos:'',
        img:  '',
    };
}
export class Video{
    videosID: string ='';
    name:string ='';
    category: string ='';
    details: string ='';
    actor:  string ='';
    director:  string ='';
    videos:string='';
    img:  string =''
}