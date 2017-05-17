import { Component } from '@angular/core';
import { Application } from '../../../entities/application';
import { AppForClient } from '../../../entities/appforclient';
import { FnMainApp } from '../../maintenance/functions/fn-main-app';
@Component({
  moduleId: module.id,
  selector: 'ac-nofav',
  template: `
    <hr />
    <br />
    <div class="jumbotron">
        <div class="row">
            <div class="col-md-2">
                <img src="images/About-96.png">
            </div>
            <div class="col-md-10">
                <h2>You haven't marked any app to your favorites list.</h2>
                <p><small>You can add your apps to your favorites, just go to the Available Apps tab then click the star button.</small></p>
            </div>
        </div>
    </div>
  `
})
export class ACNoFavComponent  { 
}
