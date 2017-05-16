import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FnMainApp } from '../../maintenance/functions/fn-main-app';
import { Feature } from '../../../entities/feature';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    moduleId: module.id,
    selector: 'ac-feature',
    templateUrl:`ac-feature.component.html`
})
export class ACFeatureComponent implements OnInit { 
    constructor(
        private route: ActivatedRoute,
        private fnMainApp : FnMainApp,
        private router: Router,
        private sanitizer:DomSanitizer,
    ){ 
        this.getselectedID(); 
    }
    selectedID:number;
    slides:any=[];
    public myInterval: number = 4500;
    public activeSlideIndex: number;

    ngOnInit(){
        this.getFeatures();
    }

    sanitize(url:string){
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }

    getselectedID(){
        this.route.params.subscribe(params => {
            this.selectedID = params['id'];});    
    }
    getFeatures(){
        this.fnMainApp.getFeatures(this.selectedID).then(
            features => {
                for (let entry of features) {
                    //console.log(entry); // 1, "string", false
                    this.slides.push({
                        image: entry.ScreenshotPath,
                        FeatFunction :entry.FeatFunction,
                        Description : entry.Description
                    });
                }
                
            });
    }
}
