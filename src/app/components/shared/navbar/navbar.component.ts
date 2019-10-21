import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router,private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  buscarPalabra(palabraBuscada:string){
    this.router.navigate(['buscar/', palabraBuscada]);
  }

}
