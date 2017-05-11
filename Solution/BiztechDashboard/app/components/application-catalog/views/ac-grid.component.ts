import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Application } from '../../../entities/application';
import { AppForClient } from '../../../entities/appforclient';
import { FnMainApp } from '../../maintenance/functions/fn-main-app';
@Component({
  moduleId: module.id,
  selector: 'ac-grid',
  templateUrl:`ac-grid.component.html`
})
export class ACGridComponent  { 
  @Input() listApps:AppForClient[][]=[];
  @Output() refreshFav = new EventEmitter();
  refresh(){
    this.refreshFav.emit();
  }
}
