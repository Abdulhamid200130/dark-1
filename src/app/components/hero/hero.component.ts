import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  bgParticles: Array<{
    size: number;
    delay: number;
    duration: number;
    left: number;
    blur: number;
    opacity: number;
    tx0: number; tx1: number; tx2: number; tx3: number; tx4: number;
  }> = [];
  midParticles: Array<{
    size: number;
    delay: number;
    duration: number;
    left: number;
    blur: number;
    opacity: number;
    tx0: number; tx1: number; tx2: number; tx3: number; tx4: number;
  }> = [];
  fgParticles: Array<{
    size: number;
    delay: number;
    duration: number;
    left: number;
    blur: number;
    opacity: number;
    tx0: number; tx1: number; tx2: number; tx3: number; tx4: number;
  }> = [];

  mouseParallaxX = 0;
  private raf = 0;

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const vw = window.innerWidth || 1;
    const x = (e.clientX / vw - 0.5) * 24; // -12..12px
    // throttle via rAF
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => {
      this.mouseParallaxX = x;
    });
  }

  ngOnInit(): void {
    const isMobile = window.innerWidth < 640;
    const bgCount = isMobile ? 6 : 12;
    const midCount = isMobile ? 9 : 16;
    const fgCount = isMobile ? 6 : 10;

    this.bgParticles = this.generateParticles(bgCount, {
      sizeMin: 140, sizeMax: 240,
      durMin: 12, durMax: 20,
      blurMin: 12, blurMax: 22,
      opMin: 0.18, opMax: 0.32,
      ampMin: 16, ampMax: 36,
      leftMin: 10, leftMax: 90
    });
    this.midParticles = this.generateParticles(midCount, {
      sizeMin: 110, sizeMax: 200,
      durMin: 10, durMax: 18,
      blurMin: 8, blurMax: 16,
      opMin: 0.22, opMax: 0.4,
      ampMin: 20, ampMax: 44,
      leftMin: 8, leftMax: 92
    });
    this.fgParticles = this.generateParticles(fgCount, {
      sizeMin: 90, sizeMax: 160,
      durMin: 8, durMax: 15,
      blurMin: 6, blurMax: 12,
      opMin: 0.16, opMax: 0.3,
      ampMin: 24, ampMax: 50,
      leftMin: 6, leftMax: 94
    });
  }

  private generateParticles(count: number, cfg: {
    sizeMin: number; sizeMax: number;
    durMin: number; durMax: number;
    blurMin: number; blurMax: number;
    opMin: number; opMax: number;
    ampMin: number; ampMax: number;
    leftMin: number; leftMax: number;
  }) {
    const arr: Array<{
      size: number; delay: number; duration: number; left: number;
      blur: number; opacity: number;
      tx0: number; tx1: number; tx2: number; tx3: number; tx4: number;
    }> = [];
    for (let i = 0; i < count; i++) {
      const rand = (min: number, max: number) => min + Math.random() * (max - min);
      const left = rand(cfg.leftMin, cfg.leftMax);
      const size = rand(cfg.sizeMin, cfg.sizeMax);
      const duration = rand(cfg.durMin, cfg.durMax);
      const delay = Math.random() * cfg.durMax;
      const blur = rand(cfg.blurMin, cfg.blurMax);
      const opacity = rand(cfg.opMin, cfg.opMax);
      const amp = rand(cfg.ampMin, cfg.ampMax);
      const dir = Math.random() > 0.5 ? 1 : -1;
      const x0 = 0;
      const x1 = dir * -amp * 0.35;
      const x2 = dir * amp * 0.45;
      const x3 = dir * -amp * 0.2;
      const x4 = dir * amp * 1.0;
      arr.push({ size, delay, duration, left, blur, opacity, tx0: x0, tx1: x1, tx2: x2, tx3: x3, tx4: x4 });
    }
    return arr;
  }
}
