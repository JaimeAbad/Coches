import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router';
import{ CochesService } from 'src/app/services/services.component';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  coche: any = {};

  constructor(private activateRoute: ActivatedRoute,
                            private _cochesService: CochesService) {
    this.activateRoute.params.subscribe( params => {
      this.coche = this._cochesService.getCoche(params['id']);
    });
   }

  ngOnInit() {
  }

}
