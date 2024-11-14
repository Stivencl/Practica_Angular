import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { SliderComponent } from "../slider/slider.component";
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ObservableService } from '../../services/observable.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MaterialModule, SliderComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, DoCheck, OnDestroy{
   contador = 0;
     
   reloj: Observable<string>  
    constructor(
    private observableService: ObservableService //los servicios deben siempre empezar con private
     ){ 
    this.reloj = this.observableService.time;
    }
  
  ngDoCheck(): void {
    this.contador++;
    console.log('DoCheck', this.contador);
  }
  ngOnDestroy(): void {
    console.log('Componente destruido');
  }
  ngOnInit(): void {
    console.log('Ejecucion del init');
  }

  valorDelHijo: number|null = null
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  imgurl = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

onEmit(valor:number){
  this.valorDelHijo = valor
}
}
