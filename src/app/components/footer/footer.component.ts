import { Component } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent   {


  anio:number = new Date().getUTCFullYear();

  constructor() { }




}
