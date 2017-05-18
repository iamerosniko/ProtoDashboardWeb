import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Application } from '../../../entities/application';
import { AppForClient } from '../../../entities/appforclient';
import { FnMainApp } from '../../maintenance/functions/fn-main-app';
import { PaginationInstance } from 'ngx-pagination';
import { ACComponent } from '../ac-parent.component';
import { GetAuth } from '../../../entities/getauth';
@Component({
  moduleId: module.id,
  selector: 'ac-grid',
  templateUrl:`ac-grid.component.html`
})
export class ACGridComponent  { 
  @Input() listApps:AppForClient[][]=[];
  @Input() thisParent:ACComponent;
  @Output() refreshFav = new EventEmitter();
 
  refresh(){
    this.refreshFav.emit();
  }
  changeMyView(val:number){
    this.thisParent.viewtype=val;
  }
}
