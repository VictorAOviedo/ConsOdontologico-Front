import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements AfterViewInit {

  @ViewChild('textBanner', { static: true })
  textBanner!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.initialAnimations();
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {
    gsap.to(this.textBanner.nativeElement, {
      scrollTrigger: {
        trigger: this.textBanner.nativeElement,
        scrub: true,
        start: '105% center'
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 5.1,
      scale: 1.1,
      /*height: 250,*/
    })
  }

  initialAnimations(): void {
    gsap.from(this.textBanner.nativeElement.childNodes, {
      duration: 1.1,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.6,
    });
  }
}