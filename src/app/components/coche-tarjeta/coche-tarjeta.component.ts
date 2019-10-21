import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coche-tarjeta',
  templateUrl: './coche-tarjeta.component.html',
  styleUrls: ['./coche-tarjeta.component.css']
})
export class CocheTarjetaComponent implements OnInit {

  @Input() coche:any = {};
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verCoche(){
    console.log(this.index);
    this.router.navigate(['/coche', this.index])
  }

}
