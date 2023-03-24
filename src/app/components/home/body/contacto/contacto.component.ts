import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements AfterViewInit {
  @ViewChild('title', { static: true })
  title!: ElementRef<HTMLDivElement>

  @ViewChild('map', { static: true })
  map!: ElementRef<HTMLDivElement>

  @ViewChild('contact', { static: true })
  contact!: ElementRef<HTMLDivElement>

  @ViewChild('address1', { static: true })
  address1!: ElementRef<HTMLDivElement>

  @ViewChild('address2', { static: true })
  address2!: ElementRef<HTMLDivElement>

  @ViewChild('phone', { static: true })
  phone!: ElementRef<HTMLDivElement>

  @ViewChild('instagram', { static: true })
  instagram!: ElementRef<HTMLDivElement>

  ngAfterViewInit() {
    this.initialAnimations();
  }

  initialAnimations(): void {
    gsap.from(this.title.nativeElement, {
      scrollTrigger: {
        trigger: this.title.nativeElement,
        scrub: false,
        start: "top 50%",
        end: "top -30%",
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateY: -100,
      duration: 3,
      opacity: 0,
      stagger: 0.2,
      delay: 0
    });

    gsap.from(this.map.nativeElement, {
      scrollTrigger: {
        trigger: this.map.nativeElement,
        scrub: false,
        start: "top 80%",
        end: "top -30%",
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: -300,
      duration: 3,
      opacity: 0,
      stagger: 0.2,
      delay: 0
    });

    gsap.from(this.contact.nativeElement, {
      scrollTrigger: {
        trigger: this.contact.nativeElement,
        scrub: false,
        start: "top 80%",
        end: "top -30%",
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: 300,
      duration: 3,
      opacity: 0,
      stagger: 0.2,
      delay: 0
    });

    gsap.from(this.address1.nativeElement, {
      scrollTrigger: {
        trigger: this.address1.nativeElement,
        scrub: false,
        start: "top 95%",
        /*end:"top -30%",*/
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: 300,
      duration: 3,
      opacity: 0,
      stagger: 0.2,
      delay: 0
    });

    gsap.from(this.address2.nativeElement, {
      scrollTrigger: {
        trigger: this.address2.nativeElement,
        scrub: false,
        start: "top 95%",
        /*end:"top -30%",*/
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: 300,
      duration: 3,
      opacity: 0,
      stagger: 0.2,
      delay: 0
    });

    gsap.from(this.phone.nativeElement, {
      scrollTrigger: {
        trigger: this.phone.nativeElement,
        scrub: false,
        start: "top 95%",
        /*end:"top -30%",*/
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: 300,
      duration: 3,
      opacity: 0,
      stagger: 0.2,
      delay: 0
    });

    gsap.from(this.instagram.nativeElement, {
      scrollTrigger: {
        trigger: this.instagram.nativeElement,
        scrub: false,
        start: "top 95%",
        /*end:"top -30%",*/
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: 300,
      duration: 3,
      opacity: 0,
      stagger: 0.2,
      delay: 0
    });

  }
}
