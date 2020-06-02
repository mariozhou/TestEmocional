import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field/form-field-module';
import { } from "@angular/material/select/select-module";
import { debounceTime } from "rxjs/operators";
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


  /* form: FormGroup; */
  //combobox select
  /*   foods: Food[] = [
     {value: 'steak-0', viewValue: 'Steak'},
     {value: 'pizza-1', viewValue: 'Pizza'},
     {value: 'tacos-2', viewValue: 'Tacos'}
   ]; */

  constructor() {
    this.buildForm();
  }

  ngOnInit() {
  }


  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }

  private buildForm() {
    this.form = new FormGroup({
      tipotest: new FormControl('', [Validators.required])
    });

  /*   this.form.valueChanges
      .subscribe(value => {
        console.log(value);
      }); */

      
    
  }
}
