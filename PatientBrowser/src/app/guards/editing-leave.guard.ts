import { Injectable } from '@angular/core';
import { EditPatientService } from './../services/editpatient.service';
import { ListComponent } from './../list/list.component';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class ConfirmDeactivateGuard implements CanDeactivate<ListComponent> {

    constructor(private editPatientService: EditPatientService) { }

    canDeactivate(target: ListComponent) {
        console.log('Guard check');
        if (this.editPatientService.patient || target.showAddPatientComp) {
            if (window.confirm('Do you really want to cancel?')) {
                this.editPatientService.patient = null;
                target.showAddPatientComp = false;
                return true;
            }

            return false;
        }

        return true;
    }
}