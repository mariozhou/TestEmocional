import { Component } from '@angular/core';
import { InformacionService } from 'src/app/services/informacion.service';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent   {

  constructor( public _is:AppComponent) { }



}
