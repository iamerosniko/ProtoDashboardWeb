export class ProjectUsers {
    constructor (
        public ProjectID : string,
        public ProjectName: string,
        public ProjectDatasource : string,
        public ProjectDb : string,
        public ProjectUserID : string,
        public ProjectPassword : string,
        public ProjectIsActive: Boolean,
        public ProjectSyncStatus : number,
        public ProjectFrontEnd: string,
        public ProjectBackEnd : string
    ){}
}
