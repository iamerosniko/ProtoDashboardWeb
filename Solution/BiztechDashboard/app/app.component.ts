import { Component } from '@angular/core';
import { GetAuthService } from './services/getauth.service';
import { GetAuth } from './entities/getauth';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:`app.component.html`
})
export class AppComponent  { 
  myAuth:GetAuth=new GetAuth('','',false,false,false,false,'');
  constructor(private getAuthService:GetAuthService){
    this.getAuthService.getAuth().then(auth => this.myAuth=auth);
  }
}
