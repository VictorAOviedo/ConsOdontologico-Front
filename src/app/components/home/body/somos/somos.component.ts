import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-somos',
  templateUrl: './somos.component.html',
  styleUrls: ['./somos.component.css']
})
export class SomosComponent implements AfterViewInit {
  @ViewChild('text', { static: true })
  text!: ElementRef<HTMLDivElement>;

  @ViewChild('img', { static: true })
  img!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.initialAnimations();
   /* this.initScrollAnimations();*/
  }

  /*initScrollAnimations(): void {
    gsap.to(this.text.nativeElement, {
      scrollTrigger: {
        trigger: this.text.nativeElement,
        scrub: true,
        start: '105% center', 
      } as gsap.plugins.ScrollTriggerInstanceVars,  
      duration: 5.1,
      scale: 0,
      
      
    })

    gsap.to(this.img.nativeElement, {
      scrollTrigger: {
        trigger: this.img.nativeElement,
        scrub: true,
        start: '1px top',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: 300,
      duration: 3,
      stagger: 0.2,
      delay: 1
    }) 
  }*/

  initialAnimations(): void {
    gsap.from(this.text.nativeElement, {
      scrollTrigger: {
        trigger: this.text.nativeElement,
        scrub: false,
        start: "1px 105%",
        end:"top 10%",
        toggleActions: "restart reverse restart none"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: 300,
      duration: 3,
      opacity: 0,
      stagger: 0.2,
      delay: 0.2
    });

    gsap.from(this.img.nativeElement, {
      scrollTrigger: {
        trigger: this.img.nativeElement,
        scrub: false,
        start: "1px 105%",
        end:"top -15%",
        toggleActions: "restart reverse restart none"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: -300,
      duration: 3,
      opacity: 0,
      stagger: 0.2,
      delay: 0.2
    });
  }
}