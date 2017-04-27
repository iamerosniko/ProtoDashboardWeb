import { Component,OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//entities
import { Application } from '../../../../entities/application';
import { MaintenanceComponent } from '../../maintenance.component';
@Component({
    moduleId: module.id,
    selector: 'bu-form',
    templateUrl: 'bu-form.component.html',
})
export class BUFormComponent    {
    @Input() mainView:MaintenanceComponent; 
    name = 'Sync page';
    constructor(
    ){ }

    checkForm():string{
        if(this.mainView.formMode=='New'){

            console.log('new');
        }
        else{
            console.log('update');
        }
        return this.mainView.formMode
    }
}
