import { Injectable } from '@angular/core';

@Injectable()
export class CochesService {
  private coche: any[] = [
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
  router: any;
  constructor() {
  console.log("Inicializando servicios ...")
}


  getCoche(){
    return this.coche;
  }

  verCoche(index:number){
    console.log(index);
    this.router.navigate(['/coche', index]);
  }

}
