import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  images = [
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616593980955-bf14c3e9d4aa?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1545696563-af8f6ec22984?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1671726203435-5d7c5e3a0630?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600880292089-90e7e86c9959?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop'
  ] as const;
}
