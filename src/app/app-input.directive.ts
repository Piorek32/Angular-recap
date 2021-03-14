import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppInput]'
})
export class AppInputDirective {


  constructor(private el : ElementRef) { }


@HostListener('blur') onBlur() {
  let val : string = this.el.nativeElement.value;
  console.log(val)
  this.el.nativeElement.value = val.toUpperCase();

}








}
