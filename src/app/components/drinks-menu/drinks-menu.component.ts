import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-drinks-menu',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './drinks-menu.component.html',
  styleUrl: './drinks-menu.component.scss'
})
export class DrinksMenuComponent {
  drinks = [
    // Милкшейки
    { name: 'Банановый', description: 'Милкшейк', price: 39900, type: 'Милкшейк', image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Oreo', description: 'Милкшейк', price: 39900, type: 'Милкшейк', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=1200&auto=format&fit=crop' },

    // Айс-ти и мохито
    { name: 'Айс ти 1 L', description: 'Освежающий чай', price: 79900, type: 'Напиток', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Айс ти 250 ml', description: 'Освежающий чай', price: 39900, type: 'Напиток', image: 'https://images.unsplash.com/photo-1469536526925-9b5547cd3921?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Клубничный мохито 250 ml', description: 'Фруктовый мохито', price: 39900, type: 'Напиток', image: 'https://images.unsplash.com/photo-1565451405320-8f0b7f98ec95?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Клубничный мохито 1 L', description: 'Фруктовый мохито', price: 79900, type: 'Напиток', image: 'https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Манго–маракуйя', description: 'Фруктовый микс', price: 39900, type: 'Напиток', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Мохито 250 ml', description: 'Классический мохито', price: 39900, type: 'Напиток', image: 'https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Мохито 1 L', description: 'Классический мохито', price: 79900, type: 'Напиток', image: 'https://images.unsplash.com/photo-1544126592-bef57119a692?q=80&w=1200&auto=format&fit=crop' },

    // Чай
    { name: 'Чай зелёный', description: 'Листовой', price: 19900, type: 'Чай', image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Чай чёрный', description: 'Листовой', price: 19900, type: 'Чай', image: 'https://images.unsplash.com/photo-1451748266019-4b6e1a5f42c0?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Чай с лимоном', description: 'Ароматный', price: 29900, type: 'Чай', image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Чай жасмин', description: 'Нежный аромат', price: 25900, type: 'Чай', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Чай ягодный', description: 'Ягодный сбор', price: 38900, type: 'Чай', image: 'https://images.unsplash.com/photo-1559877984-c26f5ef83e53?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Чай с чабрецом', description: 'Травяной', price: 38900, type: 'Чай', image: 'https://images.unsplash.com/photo-1505575972943-1ff2b2961a1b?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Чай фруктовый', description: 'Фруктовый сбор', price: 38900, type: 'Чай', image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Чай марокандский', description: 'Фирменный', price: 55000, type: 'Чай', image: 'https://images.unsplash.com/photo-1484344597163-9347c9c16b0b?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Чай Darkside', description: 'Фирменный', price: 38900, type: 'Чай', image: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?q=80&w=1200&auto=format&fit=crop' },

    // Кофе
    { name: 'Эспрессо', description: 'Классика', price: 22900, type: 'Кофе', image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Американо', description: 'Лёгкий', price: 24900, type: 'Кофе', image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Капучино', description: 'С молочной пеной', price: 25900, type: 'Кофе', image: 'https://images.unsplash.com/photo-1503481766315-7a586b20f66b?q=80&w=1200&auto=format&fit=crop' },

    // Фреши
    { name: 'Яблоко', description: 'Свежевыжатый сок', price: 49900, type: 'Фреш', image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Апельсин', description: 'Свежевыжатый сок', price: 49900, type: 'Фреш', image: 'https://images.unsplash.com/photo-1542442828-2872061f75da?q=80&w=1200&auto=format&fit=crop' },

    // Бутылочные
    { name: 'Borjomi', description: 'Минеральная вода', price: 29900, type: 'Бутылочный', image: 'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Chortoq', description: 'Минеральная вода', price: 21900, type: 'Бутылочный', image: 'https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Red Bull', description: 'Энергетик', price: 29900, type: 'Бутылочный', image: 'https://images.unsplash.com/photo-1629203841699-8b5f0ce2c143?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Кола / Фанта 1 L', description: 'Газированный напиток', price: 24900, type: 'Бутылочный', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Кола / Фанта 0.25 L', description: 'Газированный напиток', price: 19900, type: 'Бутылочный', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop' },
  ] as const;
}
