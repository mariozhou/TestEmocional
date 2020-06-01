import { Component } from '@angular/core';
import { InformacionService } from "./services/informacion.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  info:any = {};
  cargada:boolean = false;
  cargada_sobre_nosotros:boolean = false;
  equipo:any [] = [];

  constructor( public json:InformacionService){
    this.carga_info();
    this.cargar_sobre_nosotros();
  }

  public carga_info(){
    this.json.getJson("assets/data/info.pagina.json")
              .subscribe( (data:any ) =>{
                //  console.log(data);
                  this.cargada = true;
                  this.info = data;
              })
  }

  public cargar_sobre_nosotros(){
    this.json.getJson("https://test-emocional.firebaseio.com/equipo.json")
    .subscribe( (data:any ) =>{
        console.log(data);
        this.cargada_sobre_nosotros = true;
        this.equipo = data;
    })

  }
  
}
  

