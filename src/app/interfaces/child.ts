import { Gender } from './gender';
import { User } from './user';

export interface Child {
  id: number;
  image: string;
  code: string;
  first_name: string;
  last_name: string;
  birthday: Date;
  gender: Gender[];
  father_name: string;
  father_job: string;
  mother_name: string;
  mother_job: string;
  guardian: User;
  weight: number;
  height: number;
  blood_group: string;
  medical_history: string;
  surgical_history: string;
  allergic: string;
  other_info: string;
  created_at: Date;
  updated_at: Date;
}
