export interface Trip {
  name: string;
  country: string;
  rating: number;
  expenses: number;
  notes: string;
  [key: string]: any;
}
