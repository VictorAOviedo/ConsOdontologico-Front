import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements AfterViewInit{
  @ViewChild('title', {static: true})
  title!: ElementRef<HTMLDivElement>

  @ViewChild('carousel', {static: true})
  carousel!: ElementRef<HTMLDivElement>

  ngAfterViewInit(){
    this.initialAnimations();
  }

  initialAnimations(): void {
    gsap.from(this.title.nativeElement, {
      scrollTrigger: {
        trigger: this.title.nativeElement,
        scrub: false,
        start: "top 50%",
        end:"top -30%",
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateY: -100,
      duration: 3,
      opacity: 0,
      stagger: 0.2,
      delay: 0
    });

    gsap.from(this.carousel.nativeElement, {
      scrollTrigger: {
        trigger: this.carousel.nativeElement,
        scrub: false,
        start: "top 80%",
        end:"bottom 50%",
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      
      duration: 5,
      opacity: 0,
      stagger: 0,
      delay: 1
    });

  }
}
