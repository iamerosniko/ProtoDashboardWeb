import { Component,OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//entities
import { BU } from '../../../../entities/bu';
import { MaintenanceComponent } from '../../maintenance.component';
//services
import { BUService } from '../../../../services/bu.service';
@Component({
    moduleId: module.id,
    selector: 'bu-list',
    templateUrl: 'bu-list.component.html',
})
export class BUListComponent implements OnInit  { 
    @Input() mainView:MaintenanceComponent;
    name = 'Sync page';
    bUnits:BU[]=[];

    selectedBU:BU;
    constructor(
        public buService:BUService
    ){ }

    ngOnInit(){
        this.getBUs();
    }

    getBUs(){
        this.buService.getBUs()
            .then(b=>this.bUnits=b);
    }
    
}
