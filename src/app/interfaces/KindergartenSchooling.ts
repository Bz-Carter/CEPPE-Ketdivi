import { Child } from "./child";
import { KindergartenRegistration } from "./kindergartenRegistration";
import { Schooling } from "./schooling";
import { User } from "./user";

export interface Class {
    id: number;
    child_registered: KindergartenRegistration[];
    payment_1: number;
    payment_2: number;
    payment_3: number;
    payment_account: number;
    schooling: Schooling[];
    author: User[];
    created_at: Date;
    updated_at: Date;
  }
  