import { Child } from "./child";
import { Section } from "./section";
import { Session } from "./session";
import { User } from "./user";

export interface KindergartenRegistration {
    id: number;
    child: Child[];
    session: Session[];
    level: Section[];
    registration_fees: number;
    author: User[];
    created_at: Date;
    updated_at: Date;
  }
  