// // Comment Spoiler
export class CommenspoilertDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    comments: Comment = {
        commentID: 0 ,
        member_id: 0,
        movie_id: 0,
        message:'',
    };
}
export class CommentspoilerServiceApiResponse {
    status: string = '';
    message: string = '';
    comments: Comment[] = [];
}
export class Comment {
    commentID : number = 0;
    member_id: number = 0;
    movie_id: number = 0;
    message: string = '';
}

// Comment Video

export class CommenVideotDetailServiceApiResponse {
    status: string = '';
    message: string = '';
    commentVideos: CommentVideo = {
        commentID: 0 ,
        member_id: 0,
        video_id: 0,
        message:'',
    };
}
export class CommentViseoServiceApiResponse {
    status: string = '';
    message: string = '';
    commentVideos: CommentVideo[] = [];
}
export class CommentVideo {
    commentID : number = 0;
    member_id: number = 0;
    video_id: number = 0;
    message: string = '';
}
