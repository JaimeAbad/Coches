import { Component, OnInit } from '@angular/core';
import { CochesService } from "src/app/services/services.component";

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  coches:any[] = [];
  router: any;

  constructor(private _cochesService: CochesService){}


  ngOnInit() {
    this.coches = this._cochesService.getCoches();
  }

  verCoche(index:number){
    console.log(index);
    this.router.navigate(['/coche', index]);
  }

}
