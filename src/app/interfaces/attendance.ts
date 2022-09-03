import { Class } from "./class";
import { KindergartenRegistration } from "./kindergartenRegistration";

export interface Attendance {
    id: number;
    date: Date;
    class_room: Class[]
    list_of_children: KindergartenRegistration[]
    attendance: string;
  }
  