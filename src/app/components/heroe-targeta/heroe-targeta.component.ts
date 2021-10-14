import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styleUrls: ['./heroe-targeta.component.css']
})
export class HeroeTargetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor( private route: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verMas() {
    this.route.navigate(['/heroe',this.index]);
    //this.heroeSeleccionado.emit(this.index);
  }

}
