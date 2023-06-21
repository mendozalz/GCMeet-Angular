import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResaltadoBuscador]'
})
export class ResaltadoBuscadorDirective {

  @Input() searchedWord: string; // Buscar coincidencias en el buscardor de personas
  @Input() content: string; // Contenido HTML
  @Input() classToApply: string; // Clase a aplicar para resaltar el input del buscador
  @Input() setTitle:boolean = false; // selecciona el attr titulo del HTML

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.content) {
      return;
    }

    if (this.setTitle) {
      this.renderer.setProperty(
        this.el.nativeElement,
        'title',
        this.content
      );
    }

    if (!this.searchedWord || !this.searchedWord.length || !this.classToApply) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.content);
      return;
    }

    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      this.getFormattedText()
    );
  }

  getFormattedText() {
    const re = new RegExp(`(${this.searchedWord})`, 'gi');
    return this.content.replace(re, `<span class="${this.classToApply}">$1</span>`);
  }

}
