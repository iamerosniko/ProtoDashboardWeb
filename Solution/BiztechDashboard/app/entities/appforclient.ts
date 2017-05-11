export class AppForClient {
    constructor (
        public AppID: number,//primary key
        public AppName: string,//foreign key
        public AppBU: number,
        public FrontTechnology: string,
        public BackTechnology: string,
        public AppLifespan: number,
        public PrimaryBUContact: number,
        public SecondaryBUContact: number,
        public AppIsActive: Boolean,
        public AppPII: Boolean,
        public AppSecurity : string,
        public DateImplemented: Date,
        public LastProdDate : Date,
        public AppVersion : string,
        public ProjectID : string,
        public AppDesc : string,
        public AppisWeb : Boolean,
        public ProjectDevID : string,
        public ProjectModID : string,
        public ProjectOpsID : string,
        public BUName:string,
        public DevFront : string,
        public ModFront : string,
        public OpsFront : string,
        public IsUatAvail : boolean,
        public canMod : number,
        public canProd :number,
        public myFav: boolean
    ){}
}