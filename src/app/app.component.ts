import { Component, OnInit, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { HookahMenuComponent } from './components/hookah-menu/hookah-menu.component';
import { DrinksMenuComponent } from './components/drinks-menu/drinks-menu.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    HookahMenuComponent,
    DrinksMenuComponent,
    FoodMenuComponent,
    GalleryComponent,
    ReservationFormComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Premium Hookah Lounge';
  loading = signal(true);

  ngOnInit(): void {
    // Simulate loading for a short duration to show the smoke loader
    setTimeout(() => this.loading.set(false), 900);
  }
}
