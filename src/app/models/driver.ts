import { Group } from 'src/app/models/group';
import { MatIconModule } from '@angular/material/icon';
import { Admin } from './admin';
export interface Driver {
    id: number;
    names: string;
    surnames: string;
    dateOfJoin: string;
    dateOfBirthday: string;
    state: string;
    idAdministrator: Admin;
    idGroup: Group;
}