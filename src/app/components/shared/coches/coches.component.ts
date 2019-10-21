import { Component, OnInit } from '@angular/core';
import { CochesService } from "src/app/services/services.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  coches:any[] = [];

  constructor(private _cochesService: CochesService, private router:Router){}


  ngOnInit() {
    this.coches = this._cochesService.getCoches();
  }

  verCoche(index:number){
    console.log(index);
    this.router.navigate(['/coche', index]);
  }

}
