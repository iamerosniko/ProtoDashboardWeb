import { Component,Input } from '@angular/core';
import { Application } from '../../../entities/application';
@Component({
  moduleId: module.id,
  selector: 'ac-thumbnail',
  templateUrl:`ac-thumbnail.component.html`
})
export class ACThumbnailComponent  { 
  @Input() app: Application;
  constructor(
  ){

  }
}
