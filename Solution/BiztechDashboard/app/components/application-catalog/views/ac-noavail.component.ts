import { Component } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'ac-noavail',
  template: `
    <hr />
    <br />
    <div class="jumbotron">
        <div class="row">
            <div class="col-md-2">
                <img src="images/About-96.png">
            </div>
            <div class="col-md-10">
                <h2>There are no available apps for you.</h2>
                <p><small>If you think there is an issue retrieving your apps, please contact Site Administrator. Thank you.</small></p>
            </div>
        </div>
    </div>
  `
})
export class ACNoAvailComponent  { 
}
