import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../services/observable.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent implements OnInit{
  reloj: Observable<string>
   constructor(
    private observableService: ObservableService //los servicios deben siempre empezar con private
   ){ 
    this.reloj = this.observableService.time;
    }
   
   
  ngOnInit(): void {
    this.reloj.subscribe((datos)=>{console.log(datos)})
  }
}
