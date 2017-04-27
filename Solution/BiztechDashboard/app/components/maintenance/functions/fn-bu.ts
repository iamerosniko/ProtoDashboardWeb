import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';
//services
import { BUService } from '../../../services/bu.service';
//entities
import { BU } from '../../../entities/bu';

@Injectable()
export class FnBU  { 
    
    constructor(
        private buService : BUService
    ){ }
    //get all
    getBUs():Promise<BU[]>{
        return this.buService.getBUs();
    }
    //getone
    getBU(id:number):Promise<BU>{
        return this.buService.getBU(id);
    }
    //submit
    submitBU(isNew:boolean,bu:BU):Promise<any>{
        return isNew ? this.buService.postBU(bu) : this.buService.putBU(bu);
    }
}