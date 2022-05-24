import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appShared]'
})
export class SharedDirective implements OnInit {
  a:any = "abc"
  constructor(private element:ElementRef) { 
    console.log(element)
  }

  ngOnInit(): void {
    if(this.a=="abc"){
      this.element.nativeElement.style.color ="red"
      this.element.nativeElement.style.textAlign = "center";
      this.element.nativeElement.style.fontWeight = 800;
      this.element.nativeElement.style.backgroundColor = "blue"
      this.element.nativeElement.style.paddingBottom = "30px"
    }
  }
}
