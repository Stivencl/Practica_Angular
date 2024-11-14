import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=> import('./components/slider/slider.component').then(m => m.SliderComponent)
    },

    {
        path: 'card',
        
        loadComponent: () => import('./components/card/card.component').then(m => m.CardComponent) 
    },

    {
        path: 'input',
        
        loadComponent: () => import('./components/input/input.component').then(m => m.InputComponent) 
    },
     

    {
        path: 'observable',
        
    
        loadComponent: () => import('./components/observable/observable.component').then(m => m.ObservableComponent)
    },
    
];
