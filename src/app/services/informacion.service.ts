import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { strict } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  

  constructor(public http:HttpClient ) { }

  getJson(url: string){
        return this.http.get(url);
  }

  
}
