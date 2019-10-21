import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }

  buscarPalabra(palabraBuscada:string){
    this.router.navigate(['/buscar', palabraBuscada]);
  }

}
