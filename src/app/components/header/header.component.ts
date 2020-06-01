import { Component } from '@angular/core';
// donde se encuentra la var:info que guarda datos de json
import { AppComponent } from "../../app.component";
// "../../services/informacion.service";
//C:\Users\TheTitan\Desktop\portafolio\src\app\app.component.ts
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
 
})
export class HeaderComponent   {

 constructor(public _is:AppComponent){}

}
