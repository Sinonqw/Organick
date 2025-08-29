export interface IProductCard {
  tag: string;
  title: string;
  img: string;
  cost: number;
}

export const Products:IProductCard[] = [
    {
        tag: 'Vegetable',
        title: 'Calabrese Broccoli',
        img: '/products/broccoli.png',
        cost: 13
    },
    {
        cost: 14,
        img: '/products/bananas.png',
        tag: 'Fresh',
        title: 'Fresh Banana Fruites',
    },
    {
        cost: 15,
        img: '/products/millets.png',
        tag: 'Millets',
        title: 'White Nuts'
    },
    {
        cost: 17,
        img: '/products/tomato.png',
        tag: 'Vegetable',
        title: 'Vegan Red Tomato'
    },
    {
        cost: 11,
        img: '/products/mung.png',
        tag: 'Health',
        title: 'Mung Bean' 
    },
    {
        cost: 12,
        img: '/products/hazelnut.png',
        tag: 'Nuts',
        title: 'Brown Hazelnut' 
    },
    {
        cost: 17,
        img: '/products/eggs.png',
        tag: 'Fresh',
        title: 'Eggs' 
    },
    {
        cost: 15,
        img: '/products/elaichi.png',
        tag: 'Fresh',
        title: 'Zelco Suji Elaichi Rusk' 
    },
    
]
