import { Component,OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MaintenanceComponent } from '../../maintenance.component';
import { BU } from '../../../../entities/bu';
import { BUService } from '../../../../services/bu.service';
//services
@Component({
    moduleId: module.id,
    selector: 'bu-form',
    templateUrl: 'bu-form.component.html',
})
export class BUFormComponent    {
    @Input() mainView:MaintenanceComponent; 
    isNew:boolean=true;
    name = 'Sync page';
    constructor(
        public buService:BUService
    ){ }

    submit(){
        if(this.mainView.selectedBU.BUID==0){
            this.buService.postBU(this.mainView.selectedBU);
        }
        else{
            this.buService.putBU(this.mainView.selectedBU);
        }
    }
}
