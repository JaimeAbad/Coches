import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router';
import{ CochesService } from 'src/app/services/services.component';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  coches: any[] = [];
  palabraBuscada:string;

  constructor(private _activatedRoute: ActivatedRoute,
              private _cochesServices: CochesService) { }

  ngOnInit() {
    this.coches = this._cochesServices.coches;

    this._activatedRoute.params.subscribe(params => {
      this.palabraBuscada = params['palabra'];
      this.coches = this._cochesServices.buscarCoche(params['palabra'])
    })


  }



}
