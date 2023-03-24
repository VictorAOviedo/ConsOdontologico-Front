import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements AfterViewInit{
  @ViewChild('title', {static: true})
  title!: ElementRef<HTMLDivElement>;

  @ViewChild('orthodontics', {static: true})
  orthodontics!: ElementRef<HTMLDivElement>;
  @ViewChild('esthetic', {static: true})
  esthetic!: ElementRef<HTMLDivElement>;
  @ViewChild('orthopedics', {static: true})
  orthopedics!: ElementRef<HTMLDivElement>;

  @ViewChild('veneers', {static: true})
  veneers!: ElementRef<HTMLDivElement>;
  @ViewChild('cavities', {static: true})
  cavities!: ElementRef<HTMLDivElement>;
  @ViewChild('cleaning', {static: true})
  cleaning!: ElementRef<HTMLDivElement>;

  @ViewChild('surgery', {static: true})
  surgery!: ElementRef<HTMLDivElement>;
  @ViewChild('rootCanal', {static: true})
  rootCanal!: ElementRef<HTMLDivElement>;
  @ViewChild('relaxationPlates', {static: true})
  relaxationPlates!: ElementRef<HTMLDivElement>;

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

    gsap.from(this.orthodontics.nativeElement, {
      scrollTrigger: {
        trigger: this.orthodontics.nativeElement,
        scrub: false,
        start: "top 50%",
        end:"top -15%",
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: -300,
      duration: 2,
      opacity: 0,
      stagger: 0.2,
      delay: 0.2
    });

    gsap.from(this.orthopedics.nativeElement, {
      scrollTrigger: {
        trigger: this.orthopedics.nativeElement,
        scrub: false,
        start: "top 50%",
        end:"top -15%",
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: -300,
      duration: 2,
      opacity: 0,
      stagger: 0.2,
      delay: 0.2
    });

    gsap.from(this.esthetic.nativeElement, {
      scrollTrigger: {
        trigger: this.esthetic.nativeElement,
        scrub: false,
        start: "top 50%",
        end:"top -15%",
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: -300,
      duration: 2,
      opacity: 0,
      stagger: 0.2,
      delay: 0.2
    });

    gsap.from(this.veneers.nativeElement, {
      scrollTrigger: {
        trigger: this.veneers.nativeElement,
        scrub: false,
        start: "top 90%",
        end:"top -30%",
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: 300,
      duration: 2,
      opacity: 0,
      stagger: 0.2,
      delay: 0.2
    });

    gsap.from(this.cavities.nativeElement, {
      scrollTrigger: {
        trigger: this.cavities.nativeElement,
        scrub: false,
        start: "top 90%",
        end:"top -30%",
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: 300,
      duration: 2,
      opacity: 0,
      stagger: 0.2,
      delay: 0.2
    });

    gsap.from(this.cleaning.nativeElement, {
      scrollTrigger: {
        trigger: this.cleaning.nativeElement,
        scrub: false,
        start: "top 90%",
        end:"top -30%",
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: 300,
      duration: 2,
      opacity: 0,
      stagger: 0.2,
      delay: 0.2
    });

    gsap.from(this.surgery.nativeElement, {
      scrollTrigger: {
        trigger: this.surgery.nativeElement,
        scrub: false,
        start: "top 90%",
        end:"top -15%",
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: -300,
      duration: 2,
      opacity: 0,
      stagger: 0.2,
      delay: 0.2
    });

    gsap.from(this.rootCanal.nativeElement, {
      scrollTrigger: {
        trigger: this.rootCanal.nativeElement,
        scrub: false,
        start: "top 90%",
        end:"top -15%",
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: -300,
      duration: 2,
      opacity: 0,
      stagger: 0.2,
      delay: 0.2
    });

    gsap.from(this.relaxationPlates.nativeElement, {
      scrollTrigger: {
        trigger: this.relaxationPlates.nativeElement,
        scrub: false,
        start: "top 90%",
        end:"top -15%",
        toggleActions: "restart reverse restart reverse"
      } as gsap.plugins.ScrollTriggerInstanceVars,
      translateX: -300,
      duration: 2,
      opacity: 0,
      stagger: 0.2,
      delay: 0.2
    });

    
  }

}
