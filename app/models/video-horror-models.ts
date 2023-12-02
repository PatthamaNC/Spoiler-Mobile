export class VideoHorrorServiceApiResponse {
    status: string = '';
    message: string = '';
    videohorror: videohorror[] = [];
}

export class VideoHorrorDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    videohorror: videohorror = {
        videohorrorID :  '',
        horror_name:  '',
        horror_category:  '',
        horror_details:  '',
        actor:  '',
        director:  '',
        video_horror:  '',
        horror_img:  '',
    };
}

export class videohorror{
    videohorrorID : string ='';
    horror_name:string ='';
    horror_category: string ='';
    horror_details: string ='';
    actor:  string ='';
    director:  string ='';
    video_horror:  string ='';
    horror_img:  string ='';
}