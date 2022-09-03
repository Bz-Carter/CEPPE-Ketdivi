import { Property } from "./property";

export interface ElearningPlan {
  id: number;
  title: string;
  description: string;
  price: number;
  properties?: Property[];
}
