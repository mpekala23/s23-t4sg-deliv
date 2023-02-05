// List of options for entry categories
// ! DO NOT CHANGE THIS

import { Category, CategoryId } from "../types/Category";

export const categories: Category[] = [
  { id: 0, name: "Default" },
  { id: 1, name: "Startup" },
  { id: 2, name: "Nonprofit" },
  { id: 3, name: "Misc" },
];

export function getCategory(category_id: CategoryId) {
  return categories.find((x) => x.id === category_id);
}
