import { createContext } from 'react';

const categoriesList = [
    { id: 1, name: "Main Meal" },
    { id: 2, name: "Sweets" },
    { id: 3, name: "Exotic food" }
]

export const categoriesContext = createContext(categoriesList);