import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnChanges {
  @Input() appHighlight: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appHighlight']) {
      this.updateHighlight();
    }
  }

  private updateHighlight(): void {
    if (this.appHighlight) {
      this.el.nativeElement.style.fontWeight = 'bold';
    } else {
      this.el.nativeElement.style.fontWeight = '';
    }
  }

  // TODO 16: Modifier la directive pour que le texte soit en gras si l'input est true et appliquer cela au champ title du livre sur les pages book-detail et book-list
}
