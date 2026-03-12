import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-hookah-menu',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './hookah-menu.component.html',
  styleUrl: './hookah-menu.component.scss'
})
export class HookahMenuComponent {
  categories = ['Все', 'Кальяны', 'Фруктовые чаши'] as const;
  selected = signal<(typeof this.categories)[number]>('Все');

  items = [
    // Кальяны — бренды
    { name: 'STAR LINE', description: 'Классические вкусы', price: 140000, category: 'Кальяны', image: 'https://images.unsplash.com/photo-1615840287214-6f49c8c5e1b2?q=80&w=1200&auto=format&fit=crop' },
    { name: 'ENDORPHIN', description: 'Современные миксы', price: 150000, category: 'Кальяны', image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop' },
    { name: 'MUSTHAVE', description: 'Табак премиум класса', price: 160000, category: 'Кальяны', image: 'https://images.unsplash.com/photo-1544978400-84f218f0cbe1?q=80&w=1200&auto=format&fit=crop' },
    { name: 'DARKSIDE', description: 'Глубокие насыщенные вкусы', price: 160000, category: 'Кальяны', image: 'https://images.unsplash.com/photo-1622396481029-9f23cb1230d9?q=80&w=1200&auto=format&fit=crop' },
    { name: 'KHAN BURKY', description: 'Пряные восточные ноты', price: 160000, category: 'Кальяны', image: 'https://images.unsplash.com/photo-1532635223-4b6b5f9d1c98?q=80&w=1200&auto=format&fit=crop' },
    { name: 'САРМА', description: 'Лёгкие классические тона', price: 160000, category: 'Кальяны', image: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1200&auto=format&fit=crop' },
    { name: 'BLACK BURN', description: 'Яркие и дымные', price: 160000, category: 'Кальяны', image: 'https://images.unsplash.com/photo-1622396480885-3a7c0d9cec21?q=80&w=1200&auto=format&fit=crop' },
    { name: 'EVEREST', description: 'Выразительные ароматы', price: 170000, category: 'Кальяны', image: 'https://images.unsplash.com/photo-1557353425-8aa6a2d9f3e8?q=80&w=1200&auto=format&fit=crop' },
    { name: 'OVERDOSE', description: 'Сильный вкус и крепость', price: 170000, category: 'Кальяны', image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1200&auto=format&fit=crop' },
    { name: 'TROFIMOFFS', description: 'Фирменные миксы', price: 180000, category: 'Кальяны', image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop' },
    { name: 'TANGIERS', description: 'Легендарная американская классика', price: 200000, category: 'Кальяны', image: 'https://images.unsplash.com/photo-1514362545857-3b65d1b32d5b?q=80&w=1200&auto=format&fit=crop' },

    // Фруктовые чаши
    { name: 'Апельсин', description: 'Фруктовая чаша', price: 60000, category: 'Фруктовые чаши', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Грейпфрут', description: 'Фруктовая чаша', price: 60000, category: 'Фруктовые чаши', image: 'https://images.unsplash.com/photo-1615485737651-6d5e9b34a995?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Драгонфрут', description: 'Фруктовая чаша', price: 80000, category: 'Фруктовые чаши', image: 'https://images.unsplash.com/photo-1514511547113-bff2c2c2c4cc?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Ананас', description: 'Фруктовая чаша', price: 110000, category: 'Фруктовые чаши', image: 'https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Гранат', description: 'Фруктовая чаша', price: 60000, category: 'Фруктовые чаши', image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=1200&auto=format&fit=crop' },
  ] as const;

  filtered = computed(() => {
    const sel = this.selected();
    if (sel === 'Все') return this.items;
    return this.items.filter(i => i.category === sel);
  });

  select(cat: (typeof this.categories)[number]) {
    this.selected.set(cat);
  }
}
