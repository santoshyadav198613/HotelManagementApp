import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input('appHover') color: string;

  constructor(private el: ElementRef, private render: Renderer2) {
    console.log(el.nativeElement);   
    render.addClass(el.nativeElement, 'form-control');
  }

  @HostListener('mouseover') onmouseover() {
    this.render.setStyle(this.el.nativeElement, 'background-color', this.color);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.render.setStyle(this.el.nativeElement, 'background-color', 'white');
  }

  @HostListener('click') onclick() {
    this.render.setStyle(this.el.nativeElement, 'background-color', 'blue');
  }
}
