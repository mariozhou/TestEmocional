import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { NgModule } from '@angular/core';
import { MatFormFieldModule   } from '@angular/material/form-field/form-field-module';
import {  } from "@angular/material/select/select-module";
//MatInputModule, MatPaginatorModule,MatSortModule, MatTableModule
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})



export class HomeComponent {

  /* form: FormGroup; */
 //combobox select
/*   foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ]; */

  constructor() { 
  /*   this.buildForm(); */
  }

 /*   private buildForm() {
    this.form = new FormGroup({
      edad: new FormControl('', [Validators.required]),
 
    }); */

   /*  this.form.valueChanges
      .subscribe(value => {
        console.log(value);
      }); */
  
}
