import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-food-menu',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.scss'
})
export class FoodMenuComponent {
  foods = [
    // Салаты
    { name: 'Цезарь', description: 'Классический салат', price: 55000, type: 'Салаты', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Греческий', description: 'Овощной салат с сыром фета', price: 60000, type: 'Салаты', image: 'https://images.unsplash.com/photo-1568158879084-14de0b757a47?q=80&w=1200&auto=format&fit=crop' },

    // Бургеры и сэндвичи
    { name: 'Бургер с бон филе (с сыром)', description: 'Сочный бургер', price: 63000, type: 'Бургеры и сэндвичи', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Бургер с курицей', description: 'Куриная котлета', price: 50000, type: 'Бургеры и сэндвичи', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Чиабатта с курицей', description: 'Сытный сэндвич', price: 55000, type: 'Бургеры и сэндвичи', image: 'https://images.unsplash.com/photo-1544025166-c83f78a2f5e9?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Клаб-сэндвич', description: 'Классический клубный', price: 55000, type: 'Бургеры и сэндвичи', image: 'https://images.unsplash.com/photo-1565299543923-37dd37829243?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Картофель по домашнему', description: 'Румяной, сытный', price: 64900, type: 'Гарниры', image: 'https://images.unsplash.com/photo-1542367597-8849eb47a1b9?q=80&w=1200&auto=format&fit=crop' },

    // Горячий цех (закуски)
    { name: 'Сырные палочки', description: 'Хрустящие', price: 42000, type: 'Горячий цех', image: 'https://images.unsplash.com/photo-1625944528517-2dc2f1eecc10?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Наггетсы', description: 'Куриные', price: 42000, type: 'Горячий цех', image: 'https://images.unsplash.com/photo-1604908177731-2b3f2b8f1b8a?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Гарлики', description: 'Чесночные гренки', price: 30000, type: 'Горячий цех', image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Картофель фри', description: 'Хрустящий', price: 25000, type: 'Горячий цех', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop' },

    // Супы
    { name: 'Чечевичный крем-суп', description: 'Нежный крем-суп', price: 40000, type: 'Супы', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Грибной крем-суп', description: 'Ароматный крем-суп', price: 40000, type: 'Супы', image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1200&auto=format&fit=crop' },

    // Паста
    { name: 'Альфредо', description: 'Сливочный соус', price: 55000, type: 'Паста', image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Карбонара', description: 'Классическая паста', price: 55000, type: 'Паста', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1200&auto=format&fit=crop' },

    // Горячие блюда
    { name: 'Крылышки', description: 'Острые/классические', price: 58900, type: 'Горячие блюда', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Куриное бедро с микс салатом', description: 'Сытное блюдо', price: 59900, type: 'Горячие блюда', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Куриная грудка в сливочно-грибном соусе', description: 'Нежное филе', price: 76900, type: 'Горячие блюда', image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Курица с грибами', description: 'Домашний вкус', price: 57900, type: 'Горячие блюда', image: 'https://images.unsplash.com/photo-1476127395599-3f8d61b43166?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Бон филе в сливочно-грибном соусе', description: 'Премиум', price: 80000, type: 'Горячие блюда', image: 'https://images.unsplash.com/photo-1604908553927-8f2a1fbbf168?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Стейк из вырезки с ореховым соусом', description: 'Особый соус', price: 120000, type: 'Горячие блюда', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop' },

    // Мангал
    { name: 'Баварские колбаски', description: 'Сочные колбаски', price: 55000, type: 'Мангал', image: 'https://images.unsplash.com/photo-1543339308-43f2d8c6a79f?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Сет «Мангал ассорти» (на 4 персоны)', description: 'Большой сет', price: 249000, type: 'Мангал', image: 'https://images.unsplash.com/photo-1604908178071-8d5b0d192f2f?q=80&w=1200&auto=format&fit=crop' },

    // Снеки
    { name: 'Сет', description: 'Ассорти снеков', price: 120000, type: 'Снеки', image: 'https://images.unsplash.com/photo-1544025166-c83f78a2f5e9?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Фисташки', description: 'Орехи', price: 35000, type: 'Снеки', image: 'https://images.unsplash.com/photo-1592317848799-09699305f13e?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Миндаль', description: 'Орехи', price: 35000, type: 'Снеки', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Кешью', description: 'Орехи', price: 35000, type: 'Снеки', image: 'https://images.unsplash.com/photo-1601599968302-9e2c064b2d30?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Курт', description: 'Традиционный продукт', price: 15000, type: 'Снеки', image: 'https://images.unsplash.com/photo-1604908177731-2b3f2b8f1b8a?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Чипсы', description: 'Хрустящие', price: 35000, type: 'Снеки', image: 'https://images.unsplash.com/photo-1543351611-58f69d2e8f56?q=80&w=1200&auto=format&fit=crop' },
    { name: 'Семечки', description: 'Обжаренные', price: 25000, type: 'Снеки', image: 'https://images.unsplash.com/photo-1544025166-c83f78a2f5e9?q=80&w=1200&auto=format&fit=crop' },
  ] as const;
}
