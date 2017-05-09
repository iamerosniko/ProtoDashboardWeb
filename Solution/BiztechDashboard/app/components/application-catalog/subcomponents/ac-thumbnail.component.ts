import { Component,Input } from '@angular/core';
import { AppForClient } from '../../../entities/appforclient';
@Component({
  moduleId: module.id,
  selector: 'ac-thumbnail',
  templateUrl:`ac-thumbnail.component.html`
})
export class ACThumbnailComponent  { 
  @Input() app: AppForClient;
  constructor(
  ){

  }

  run(){
    window.open(this.app.OpsFront);
  }
}
