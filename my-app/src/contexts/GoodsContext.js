import { createContext } from 'react';

const foodList = [
    { id: 1, name: "Ham Ramen", price: 7.99, categoryId: 1 },
    { id: 2, name: "Tonkotsu", price: 3.99, categoryId: 1 },
    { id: 3, name: "Miso Soup", price: 1.99, categoryId: 1 },
    { id: 4, name: "Dorayaki", price: 2.99, categoryId: 2 },
    { id: 5, name: "Mochi", price: 0.99, categoryId: 2 },
    { id: 6, name: "Dango", price: 1.99, categoryId: 2 },
    { id: 7, name: "Unagi", price: 30.99, categoryId: 3 },
    { id: 8, name: "Natto", price: 10.99, categoryId: 3 },
    { id: 9, name: "Sushi", price: 14.99, categoryId: 3 },
]

export const goodsContext = createContext(foodList);