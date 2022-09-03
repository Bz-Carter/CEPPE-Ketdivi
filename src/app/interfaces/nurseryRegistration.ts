import { Child } from "./child";
import { Session } from "./session";
import { User } from "./user";

export interface NurseryRegistration {
    id: number;
    child: Child[];
    session: Session[];
    registration_fees: number;
    author: User[];
    created_at: Date;
    updated_at: Date;
  }
  