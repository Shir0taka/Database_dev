import { createContext } from 'react';

const categoriesList = [
    { id: 1, name: "Tableware" },
    { id: 2, name: "Clothes" },
    { id: 3, name: "Cosmetics" }
]

export const categoriesContext = createContext(categoriesList);