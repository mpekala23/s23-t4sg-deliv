export interface NewEntry {
  name: string;
  link: string;
  description: string;
  user: string;
  category: 0 | 1 | 2 | 3;
  userid?: string;
}

export interface Entry extends NewEntry {
  id: string;
  userid: string;
}
