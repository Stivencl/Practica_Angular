import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ObservableService } from '../../services/observable.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MaterialModule, FormsModule, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input() title: string = '';
  @Output() emisor = new EventEmitter<number>();
  value = 0;

  reloj: Observable<string>  
  constructor(
    private observableService: ObservableService //los servicios deben siempre empezar con private
   ){ 
    this.reloj = this.observableService.time;
    }
    
  cambioSlider(valor: number){
    this.emisor.emit(valor);
  }
}
