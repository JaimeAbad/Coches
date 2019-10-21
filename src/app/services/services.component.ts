import { Injectable } from '@angular/core';

@Injectable()
export class CochesService {
  coches: any[] = [
    {
      nombre: "Mercedes",
      bio: " Con la invención del automóvil, Gottlieb Daimler y Karl Benz ponen la primera piedra del tráfico motorizado individual.",
      img: "assets/img/mercedes.jpg",
      aparicion: "1941-11-01"
    },
    {
      nombre: "Ferrari",
      bio: "Es una compañía de automóviles deportivos con sede en Maranello (Italia). Fue fundada en 1929 por el piloto de autos de competición, Enzo Ferrari, con el nombre de Scuderia Ferrari.",
      img: "assets/img/ferrari.png",
      aparicion: "1939-05-01"
    },
    {
      nombre: "Honda",
      bio: "Fue fundada en 1949 en Hamamatsu (Japón) por el ingeniero Sōichirō Honda con el nombre de Honda Technical Research Institute (Instituto Honda de Investigaciones Técnicas).",
      img: "assets/img/honda.png",
      aparicion: "1964-01-01"
    }
];
  constructor() {
  console.log("Inicializando servicios ...")
}


  getCoche(index:string){
    if(index == undefined){
      return this.coches;
    }else{
      return this.coches[index];
    }

  }

  getCoches(){
    return this.coches;
  }


  buscarCoche(palabraBuscada:string): Coche[] {
    let cocheArr: Coche[] = [];
    palabraBuscada = palabraBuscada.toLowerCase();

    for(let i=0; i<this.coches.length; i++){
      let coche = this.coches[i];
      let nombre = coche.nombre.toLowerCase();

      /*si encuentra la palabra buscada devuelve 0 o +*/
      if(nombre.indexOf(palabraBuscada) >=0){
        // si entra aqui significa que ha encontrado la palabra palabraBuscada
        cocheArr.push(coche); //añadimos el coche
      }

    }
    return cocheArr;
  }





}
export interface Coche {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
}
