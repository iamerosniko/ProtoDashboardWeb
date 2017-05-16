export class Comment {
    constructor (
        public CommentID: number,
        public AppID : number,
        public Comment : string,
        public UserName : string,
        public DatePosted: Date,
        public Subject : string
    ){}
}