import { Class } from "./class";
import { KindergartenRegistration } from "./kindergartenRegistration";
import { NurseryRegistration } from "./nurseryRegistration";
import { User } from "./user";

export interface Surveillance {
    id: number;
    registered: NurseryRegistration;
    description: string;
    price: number;
    author: User[];
    arriving_time: string;
    departure_time: string;
    created_at: Date;
    updated_at: Date;
  }
  