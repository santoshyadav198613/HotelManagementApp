import { AbstractControl } from "@angular/forms";


export class CustomValidator {

    static CardValidator(control: AbstractControl) {
        if (control !== undefined || control! == null) {
            if (control.value.toString().length < 16 || control.value.toString().length > 19) {
                return { invalidCard: true };
            }
            return null;
        }
        return null;
    }

    static cvvValidator(control: AbstractControl) {
        if (control !== undefined || control! == null) {
            if (control.value.toString().length < 3 || control.value.toString().length > 6) {
                return { invalidCvv: true };
            }
            return null;
        }
        return null;
    }

}