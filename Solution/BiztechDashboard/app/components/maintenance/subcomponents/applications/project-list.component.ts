import { Component,OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//entities
import { Project } from '../../../../entities/project';
//services
import { Application } from '../../../../entities/application';
import { ProjectService } from '../../../../services/project.service';
@Component({
    moduleId: module.id,
    selector: 'proj-list',
    templateUrl: 'project-list.component.html',
})
export class ProjectListComponent implements OnInit  { 
    projects:Project[]=[];

    @Input() application:Application;
    @Input() mode : number;

    constructor(
        private service: ProjectService
    ){ }

    ngOnInit(){
        this.service.getProjects()
            .then(projects=>{
                this.projects=projects;
            });
    }    

    selectProject(id:string){
        this.application.ProjectDevID= this.mode==1 ? id : this.application.ProjectDevID;
        this.application.ProjectModID= this.mode==2 ? id : this.application.ProjectModID;
        this.application.ProjectOpsID= this.mode==3 ? id : this.application.ProjectOpsID;
    }
}
