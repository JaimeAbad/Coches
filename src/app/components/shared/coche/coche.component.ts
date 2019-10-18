import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe( params => {
      console.log(params);
    });
   }

  ngOnInit() {
  }

}
