import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'buscador-agregar-personas',
  templateUrl: './buscador-agregar-personas.component.html',
  styleUrls: ['./buscador-agregar-personas.component.css'],
})
export class BuscadorAgregarPersonasComponent {
  @ViewChild('onFocus') focus: ElementRef;

  constructor(private renderer2:Renderer2){}


  
  public changeColor() {
    const foco = this.focus.nativeElement;

    this.renderer2.setStyle(foco, 'backgroundColor', 'yellow');
    this.renderer2.setStyle(foco, 'color', 'black'); 
  }
  
  title = 'angular-text-search-highlight';
  searchText = '';
  nombres = [
    'Lenin Mendoza',
    'Juan Camilo',
    'Daniel Perez',
    'Juan Tamayo',
    'Sor Sanchez',
    'Maristella Sanchez',
  ];

}
