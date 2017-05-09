export class AppForClient {
    constructor (
        public AppID: number,//primary key
        public AppName: string,
        public AppisWeb : Boolean,
        public BUName:string,
        public DevFront : string,
        public ModFront : string,
        public OpsFront : string,
        public IsUatAvail : boolean,
        public AppIsActive : boolean,
        public ProjectOpsID : string
    ){}
}