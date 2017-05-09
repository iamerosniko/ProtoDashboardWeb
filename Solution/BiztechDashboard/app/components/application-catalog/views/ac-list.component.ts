import { Component,OnInit,Input } from '@angular/core';
import { Application } from '../../../entities/application';
import { AppForClient } from '../../../entities/appforclient';
import { FnMainApp } from '../../maintenance/functions/fn-main-app';
@Component({
  moduleId: module.id,
  selector: 'ac-list',
  templateUrl:`ac-list.component.html`
})
export class ACListComponent  { 
  @Input() apps:AppForClient[]=[];
  
  run(app:AppForClient){
    window.open(app.OpsFront);
  }
}
