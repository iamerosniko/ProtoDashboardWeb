export class GetAuth {
    constructor (
        public UserName : string,
        public FullName : string,
        public CanAdd : boolean,
        public CanDelete : boolean,
        public CanEdit : boolean,
        public CanView : boolean,
        public Module : string
    ){}
}