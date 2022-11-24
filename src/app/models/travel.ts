import { Admin } from "./admin";
import { Driver } from "./driver";
import { Route } from "./route";
import { Vehicle } from "./vehicle";

export interface Travel {
    id: number;
    dateOfStart: string;
    dateOfEnd: string;
    duration: number;
    state: string;
    idAdministrator: Admin;
    idDriver: Driver;
    idVehicle: Vehicle;
    idRoute: Route;
}