import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field/form-field-module';
import { } from "@angular/material/select/select-module";
import { debounceTime } from "rxjs/operators";
import { AppComponent } from "../../app.component";
import { app_routing } from "../../app.routes";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


//MatInputModule, MatPaginatorModule,MatSortModule, MatTableModule


interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})




export class HomeComponent implements OnInit {
  form: FormGroup;
  /* router:Router; */
  foods: Food[] = [
    {value:"about",viewValue :'7'},
    {value:"ninez",viewValue :'8'},
    {value:"ninez",viewValue :'9'},
    {value:"ninez",viewValue :'10'},
    {value:"ninez",viewValue :'11'},
    {value:"ninez",viewValue :'12'},
    {value:"ninez",viewValue :'13'},
    {value:"adoles",viewValue :'14'},
    {value:"adoles",viewValue :'15'},
    {value:"adoles",viewValue :'16'},
    {value:"adoles",viewValue :'17'},
    {value:"adoles",viewValue :'18'},
    {value:"adoles",viewValue :'19'},
    {value:"adoles",viewValue :'20'},
    {value:"adoles",viewValue :'21'},
    {value:"adoles",viewValue :'22'},
    {value:"adoles",viewValue :'23'},
    {value:"adoles",viewValue :'24'},
    {value:"adulto",viewValue :'25 en adelante'}
  
  ];
  selectedFood = this.foods[11].value;
 
 
  /* app: app_routing; */

  /* form: FormGroup; */
  //combobox select
  /*   foods: Food[] = [
     {value: 'steak-0', viewValue: 'Steak'},
     {value: 'pizza-1', viewValue: 'Pizza'},
     {value: 'tacos-2', viewValue: 'Tacos'}
   ]; */

   
  constructor(private router:Router) {
    this.buildForm();
  }

  

  ngOnInit() {
  }

  onSelect(foods){
    this.router.navigate(['/',foods.value]);
    console.log(foods.value);
  }
  
  /*   save(event: Event) {
      event.preventDefault();
      const value = this.form.value;
      console.log(value);
  
    } */

    /* opentest():void {
      const value = this.form.value;
       if (value="ninez") { 
        this.router.navigate(['about']);
  
      } */

  private buildForm() {
    this.form = new FormGroup({
      tipotest: new FormControl('', [Validators.required])
    });

     /*  this.form.valueChanges
        .subscribe(value => {
          console.log(value);
        });
 */
  }
   
}
