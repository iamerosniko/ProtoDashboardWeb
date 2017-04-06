export class Application {
    constructor (
        public AppID: number,//primary key
        public AppName: string,//foreign key
        public AppBU: number,
        public FrontTechnology: string,
        public FrontEndPath: string,
        public BackTechnology: string,
        public BackEndPath: string,
        public AppLifespan: number,
        public PrimaryBUContact: number,
        public SecondaryBUContact: number,
        public AppIsActive: Boolean,
        public AppPII: Boolean,
        public AppSecurity : string,
        public DateImplemented: Date,
        public LastProdDaAppte : Date,
        public AppVersion : string,
        public ProjectID : string,
        public AppDesc : string,
        public AppDatasource : string,
        public AppDatabasename : string,
        public AppUserID : string,
        public AppPassword : string,
        public AppisWeb : Boolean
    ){}
}