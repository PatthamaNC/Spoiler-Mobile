export class ResportVideoServiceApiResponse {
    status: string = '';
    message: string = '';
    reportvideo: Reportvideo[] = [];
}
export class Reportvideo {
    reportvideoID : string = '';
    member_id: number = 0;
    video_id: string = '';
    reason: string = '';
    status: string = '';
}
export class ReportVideoDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    reportvideo: Reportvideo = {
        reportvideoID: '',
        member_id:0,
        video_id: '',
        reason:'',
        status:  ''
    };
}