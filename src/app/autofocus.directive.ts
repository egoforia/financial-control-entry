import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective {

  private elementRef: ElementRef;
 
  constructor(elementRef: ElementRef) {
      this.elementRef = elementRef;
  };

  public ngOnInit(): void {
      this.elementRef.nativeElement.focus();
  }

}
