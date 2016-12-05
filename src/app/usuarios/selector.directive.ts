import { Directive ,ElementRef,Renderer,HostListener} from '@angular/core';

@Directive({
  selector: '[Selector-Directive]'
})
export class SelectorDirective {
  constructor(private el:ElementRef, private render: Renderer) { }
  @HostListener('mouseover')
  MouseOver(){
    this.render.setElementStyle(this.el.nativeElement,'background-color','green'); 
    this.render.setElementStyle(this.el.nativeElement,'cursor','pointer'); 

  }
  @HostListener('mouseleave')
  MouseLeave(){
    this.render.setElementStyle(this.el.nativeElement,'background-color','white');  
  }
}


