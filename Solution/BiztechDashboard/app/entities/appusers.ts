export class AppUsers {
    constructor (
        public AppUserID: string,//foreign key
        public UserName : string,
        public AppID : number
    ){}
}