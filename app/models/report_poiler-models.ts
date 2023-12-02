export class ResportspoilerServiceApiResponse {
    status: string = '';
    message: string = '';
    reportspoilers: reportspoiler[] = [];
}
export class reportspoiler {
    reportspoilerID: string = '';
    member_id: number = 0;
    spoiler_id: string = '';
    reason: string = '';
    created_at: Date = new Date();
 
}