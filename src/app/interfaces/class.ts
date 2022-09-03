import { KindergartenRegistration } from "./kindergartenRegistration";
import { Section } from "./section";
import { User } from "./user";

export interface Class {
    id: number;
    name: string;
    level: Section[];
    description: string;
    list_of_children: KindergartenRegistration[];
    author: User[];
    created_at: Date;
    updated_at: Date;
}
  