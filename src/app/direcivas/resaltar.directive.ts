import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]',
  standalone: true
})
export class ResaltarDirective {

  @Input() appResaltar='';

  constructor(private el:ElementRef) { }
  
  @HostListener('mouseenter') onMouseenter(){
    this.resaltar(this.appResaltar);
  }
  @HostListener('mouseleave') onMouseleave(){
    this.resaltar('');
  }
 

  resaltar(color:string){
  this.el.nativeElement.style.backgroundColor= color;
}

}
