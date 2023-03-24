import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})

export class GaleriaComponent implements AfterViewInit{
  @ViewChild('title', {static: true})
  title!: ElementRef<HTMLDivElement>;

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
      delay: 0.2
    });
  }
}
