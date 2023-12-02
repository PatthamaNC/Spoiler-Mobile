export class ResportCommentServiceApiResponse {
    status: string = '';
    message: string = '';
    reportcomments: reportcomment[] = [];
}
export class reportcomment {
    repoctcommentID : string = '';
    member_id: number = 0;
    comment_id: string = '';
    reason: string = '';
    created_at: Date = new Date();
 
}