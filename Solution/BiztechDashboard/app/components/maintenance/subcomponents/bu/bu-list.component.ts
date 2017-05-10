import { Component,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//entities
import { BU } from '../../../../entities/bu';
import { MaintenanceComponent } from '../../maintenance.component';
//services
@Component({
    moduleId: module.id,
    selector: 'bu-list',
    templateUrl: 'bu-list.component.html',
})
export class BUListComponent{ 
    @Input() mainView:MaintenanceComponent;
    @Input() listBU:BU;
    selectBU(bu:BU){
        this.mainView.selectedBU=bu;
        this.mainView.toFormView('Update',true,0);
    }
}
