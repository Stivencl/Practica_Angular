import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  value = 'Clear me';
  
  lista = [
    {
    nombre: 'Juan',
    id: 1
    },
    {
    nombre: 'Pedro',
    id: 2
    },
    {
    nombre: 'Maria',
    id: 3
    },
    {
    nombre: 'Jose',
    id: 4
    },
    {
    nombre: 'Luis',
    id: 5
    },
    {
    nombre: 'Ana',
    id: 6
    }
    ]
  
}
