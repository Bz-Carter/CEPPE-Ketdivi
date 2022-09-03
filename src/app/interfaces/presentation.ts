import { Counter } from './counter';
import { ElearningPlan } from './elearning-plans';
import { Activity } from './activity';

export interface Presentation {
  id: number;
  image: string;
  title: string;
  description: string;
  story: string;
  story_image: string;
  advantage: string;
  advantage_image: string;
  counters?: Counter[];
  activities?: Activity[];
  planing?: ElearningPlan[];
}
