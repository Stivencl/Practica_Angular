import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input() title: string = '';
  @Output() emisor = new EventEmitter<number>();
  value = 0;

  cambioSlider(valor: number){
    this.emisor.emit(valor);
  }
}
